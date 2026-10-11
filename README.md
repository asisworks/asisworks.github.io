# As Is Works

Сайт студии As Is Works и лендинг Seynera Reader на Astro, Tailwind CSS и TypeScript.

## Локальная разработка

```sh
npm ci
npm run dev
npm run build
```

Сборка создаётся в `dist/`. Сайт настроен для корня `https://asisworks.github.io/` и автоматически публикуется через `.github/workflows/deploy.yml` после обновления ветки `main`, когда GitHub Pages использует GitHub Actions как источник публикации.

## Seynera Reader

Русский лендинг: `/seynera-reader/`; английский: `/en/seynera-reader/`. Текущий статус версии 1.1.0 — «Готовится к выпуску». Кнопка скачивания выключена. После публикации релиза достаточно задать подтверждённый URL GitHub Releases в `src/seynera-release.ts`.

Лендинг показывает снимки интерфейса текущей тестовой версии Reader. Временные изображения на главной странице сохранены в утверждённой композиции.
