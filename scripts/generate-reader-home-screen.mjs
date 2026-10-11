import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(path.join(project, 'scripts/reader-home-screen.json'), 'utf8'));
const { topLeft, topRight, bottomRight, bottomLeft } = config.screenCorners;
const corners = [topLeft, topRight, bottomRight, bottomLeft];
const [photoWidth, photoHeight] = config.photoSize;
const [cropX, cropY, cropWidth, cropHeight] = config.sourceCrop;
const scale = config.renderScale;
const photo = await sharp(path.join(project, config.photo)).metadata();
if (photo.width !== photoWidth || photo.height !== photoHeight) {
  throw new Error('Original laptop photo dimensions differ from the saved corner coordinates');
}

function solve(matrix, values) {
  const rows = matrix.map((row, i) => [...row, values[i]]);
  for (let col = 0; col < 8; col++) {
    let pivot = col;
    for (let row = col + 1; row < 8; row++) {
      if (Math.abs(rows[row][col]) > Math.abs(rows[pivot][col])) pivot = row;
    }
    if (Math.abs(rows[pivot][col]) < 1e-12) throw new Error('Screen quadrilateral is degenerate');
    [rows[col], rows[pivot]] = [rows[pivot], rows[col]];
    const divisor = rows[col][col];
    for (let k = col; k <= 8; k++) rows[col][k] /= divisor;
    for (let row = 0; row < 8; row++) {
      if (row === col) continue;
      const factor = rows[row][col];
      for (let k = col; k <= 8; k++) rows[row][k] -= factor * rows[col][k];
    }
  }
  return rows.map(row => row[8]);
}

function homography(from, to) {
  const matrix = [];
  const values = [];
  for (let i = 0; i < 4; i++) {
    const [u, v] = from[i];
    const [x, y] = to[i];
    matrix.push([u, v, 1, 0, 0, 0, -x * u, -x * v]);
    values.push(x);
    matrix.push([0, 0, 0, u, v, 1, -y * u, -y * v]);
    values.push(y);
  }
  return [...solve(matrix, values), 1];
}

function projectPoint(h, x, y) {
  const divisor = h[6] * x + h[7] * y + h[8];
  return [(h[0] * x + h[1] * y + h[2]) / divisor,
    (h[3] * x + h[4] * y + h[5]) / divisor];
}

function sample(source, width, height, x, y, channel) {
  x = Math.max(0, Math.min(width - 1, x));
  y = Math.max(0, Math.min(height - 1, y));
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const x1 = Math.min(width - 1, x0 + 1), y1 = Math.min(height - 1, y0 + 1);
  const fx = x - x0, fy = y - y0;
  const p = (xx, yy) => source[(yy * width + xx) * 3 + channel];
  return (p(x0, y0) * (1 - fx) + p(x1, y0) * fx) * (1 - fy)
    + (p(x0, y1) * (1 - fx) + p(x1, y1) * fx) * fy;
}

const sourceRect = [[0, 0], [cropWidth, 0], [cropWidth, cropHeight], [0, cropHeight]];
const forward = homography(sourceRect, corners);
for (let i = 0; i < 4; i++) {
  const actual = projectPoint(forward, ...sourceRect[i]);
  if (Math.hypot(actual[0] - corners[i][0], actual[1] - corners[i][1]) > 1e-6) {
    throw new Error('Projective transform does not reach the saved screen corners');
  }
}
const inverse = homography(corners, sourceRect);
const left = Math.max(0, Math.floor(Math.min(...corners.map(([x]) => x)) - 3));
const top = Math.max(0, Math.floor(Math.min(...corners.map(([, y]) => y)) - 3));
const right = Math.min(photoWidth, Math.ceil(Math.max(...corners.map(([x]) => x)) + 3));
const bottom = Math.min(photoHeight, Math.ceil(Math.max(...corners.map(([, y]) => y)) + 3));

for (const [language, screenshot] of Object.entries(config.screenshots)) {
  const { data, info } = await sharp(path.join(project, screenshot))
    .removeAlpha().raw().toBuffer({ resolveWithObject: true });
  if (info.width < cropX + cropWidth || info.height < cropY + cropHeight) {
    throw new Error(`${screenshot} does not contain configured source crop`);
  }
  const width = photoWidth * scale, height = photoHeight * scale;
  const output = Buffer.alloc(width * height * 4);
  for (let row = top * scale; row < bottom * scale; row++) {
    for (let col = left * scale; col < right * scale; col++) {
      const [u, v] = projectPoint(inverse, (col + .5) / scale, (row + .5) / scale);
      const sx = cropX + Math.max(0, Math.min(cropWidth - 1, u));
      const sy = cropY + Math.max(0, Math.min(cropHeight - 1, v));
      const offset = (row * width + col) * 4;
      for (let channel = 0; channel < 3; channel++) {
        output[offset + channel] = Math.round(sample(data, info.width, info.height, sx, sy, channel));
      }
      output[offset + 3] = 255;
    }
  }
  const destination = path.join(project, config.outputs[language]);
  await sharp(output, { raw: { width, height, channels: 4 } }).png().toFile(destination);
  console.log(`${language}: ${destination}`);
}
