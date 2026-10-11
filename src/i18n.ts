export const dictionary = {
  ru: {
    programs:'Программы', about:'О проекте', contacts:'Контакты', more:'Подробнее', development:'В разработке', back:'Вернуться в каталог', menu:'Открыть меню', theme:'Переключить тему',
    eyebrow:'ПРОСТЫЕ РЕШЕНИЯ ДЛЯ ВАЖНЫХ ЗАДАЧ', heroA:'Программы, которыми', heroAccent:'хочется', heroB:'пользоваться', heroText:'Мы создаём удобные и продуманные приложения для чтения, работы с фотографиями, звуком и других повседневных задач.',
    readerType:'ЧТЕНИЕ ЭЛЕКТРОННЫХ КНИГ', readerText:'Удобная и настраиваемая читалка для комфортного чтения в любое время', readerBenefits:['Поддержка FB2, EPUB','Гибкие настройки','Удобная библиотека'],
    vixaType:'ПРОСМОТР И СОРТИРОВКА ФОТОГРАФИЙ', vixaText:'Быстрый и удобный просмотрщик фотографий с возможностями сортировки, сравнения и организации коллекций', vixaBenefits:['Быстрый просмотр','Сравнение фотографий','Удобная организация'],
    novaType:'ЗАПИСЬ И ОБРАБОТКА АУДИО', novaText:'Простой и эффективный аудиорекордер для повседневных и профессиональных задач', novaBenefits:['Запись аудио','Конвертация WAV → MP3','Удобное прослушивание'],
    values:[['Внимание к деталям','Мы ценим качество и удобство в каждой мелочи'],['Реальные задачи','Наши программы созданы для повседневного использования'],['Независимый подход','Мы остаёмся небольшой студией, свободной в своих решениях'],['Люди важнее','Мы создаём программы для людей, а не для цифр в отчётах']],
    temporary:'Страница программы находится в разработке.', copyright:'Все права защищены.'
  },
  en: {
    programs:'Programs', about:'About', contacts:'Contact', more:'Explore', development:'In development', back:'Back to catalog', menu:'Open menu', theme:'Toggle theme',
    eyebrow:'SIMPLE SOLUTIONS FOR IMPORTANT TASKS', heroA:'Software you will', heroAccent:'love', heroB:'to use', heroText:'We create thoughtful, easy-to-use apps for reading, working with photos and sound, and other everyday tasks.',
    readerType:'E-BOOK READING', readerText:'A comfortable, customizable reader for enjoying books whenever you like', readerBenefits:['FB2 and EPUB support','Flexible settings','A handy library'],
    vixaType:'PHOTO VIEWING AND SORTING', vixaText:'A fast, convenient photo viewer for sorting, comparing, and organizing collections', vixaBenefits:['Fast viewing','Photo comparison','Easy organization'],
    novaType:'AUDIO RECORDING AND PROCESSING', novaText:'A simple, effective audio recorder for everyday and professional tasks', novaBenefits:['Audio recording','WAV → MP3 conversion','Easy listening'],
    values:[['Attention to detail','We value quality and ease of use in every detail'],['Real tasks','Our software is made for everyday use'],['Independent thinking','We remain a small studio, free to make our own choices'],['People first','We make software for people, not figures in reports']],
    temporary:'This program page is in development.', copyright:'All rights reserved.'
  }
} as const;
export type Language = keyof typeof dictionary;
