export const dictionary = {
  ru: {
    programs:'Программы', about:'О проекте', contacts:'Контакты', more:'Подробнее', development:'В разработке', back:'Вернуться в каталог', menu:'Открыть меню', theme:'Переключить тему',
    eyebrow:'ПРОСТЫЕ РЕШЕНИЯ ДЛЯ ВАЖНЫХ ЗАДАЧ', heroA:'Программы, которыми', heroAccent:'хочется', heroB:'пользоваться', heroText:'Мы создаём удобные и продуманные приложения для чтения, работы с фотографиями, звуком и других повседневных задач.',
    readerType:'ЧТЕНИЕ ЭЛЕКТРОННЫХ КНИГ', readerText:'Удобная и настраиваемая читалка для комфортного чтения в любое время', readerBenefits:['Поддержка FB2, EPUB','Гибкие настройки','Удобная библиотека'],
    vixaType:'ПРОСМОТР И СОРТИРОВКА ФОТОГРАФИЙ', vixaText:'Быстрый и удобный просмотрщик фотографий с возможностями сортировки, сравнения и организации коллекций', vixaBenefits:['Быстрый просмотр','Сравнение фотографий','Удобная организация'],
    novaType:'ЗАПИСЬ И ОБРАБОТКА АУДИО', novaText:'Простой и эффективный аудиорекордер для повседневных и профессиональных задач', novaBenefits:['Запись аудио','Конвертация WAV → MP3','Удобное прослушивание'],
    values:[['Внимание к деталям','Мы ценим качество и удобство в каждой мелочи'],['Реальные задачи','Наши программы созданы для повседневного использования'],['Независимый подход','Мы остаёмся небольшой студией, свободной в своих решениях'],['Люди важнее','Мы создаём программы для людей, а не для цифр в отчётах']],
    aboutTitle:'Небольшая студия. Полезные программы.', aboutIntro:'As Is Works — независимая студия, в которой идеи превращаются в настоящие программы.', aboutBody:'Мы создаём то, чем хотели бы пользоваться сами. Без лишней сложности, перегруженных интерфейсов и функций ради количества. Нам важно, чтобы программа была удобной, понятной и просто приятно работала.', aboutNext:'Начали с Seynera Reader, программы для чтения электронных книг. А дальше будут новые идеи, новые проекты и, конечно, новые версии того, что уже создано.', contactsTitle:'Связаться с нами', contactsIntro:'Наши проекты и обновления — на GitHub студии.', contactsGithub:'As Is Works на GitHub',
    temporary:'Страница программы находится в разработке.', copyright:'Все права защищены.'
  },
  en: {
    programs:'Programs', about:'About', contacts:'Contact', more:'Explore', development:'In development', back:'Back to catalog', menu:'Open menu', theme:'Toggle theme',
    eyebrow:'SIMPLE SOLUTIONS FOR IMPORTANT TASKS', heroA:'Software you will', heroAccent:'love', heroB:'to use', heroText:'We create thoughtful, easy-to-use apps for reading, working with photos and sound, and other everyday tasks.',
    readerType:'E-BOOK READING', readerText:'A comfortable, customizable reader for enjoying books whenever you like', readerBenefits:['FB2 and EPUB support','Flexible settings','A handy library'],
    vixaType:'PHOTO VIEWING AND SORTING', vixaText:'A fast, convenient photo viewer for sorting, comparing, and organizing collections', vixaBenefits:['Fast viewing','Photo comparison','Easy organization'],
    novaType:'AUDIO RECORDING AND PROCESSING', novaText:'A simple, effective audio recorder for everyday and professional tasks', novaBenefits:['Audio recording','WAV → MP3 conversion','Easy listening'],
    values:[['Attention to detail','We value quality and ease of use in every detail'],['Real tasks','Our software is made for everyday use'],['Independent thinking','We remain a small studio, free to make our own choices'],['People first','We make software for people, not figures in reports']],
    aboutTitle:'A small studio. Useful software.', aboutIntro:'As Is Works is an independent studio where ideas become real software.', aboutBody:'We make software we would want to use ourselves. No needless complexity, cluttered interfaces, or features added just to make a longer list. We want every app to be easy to use, easy to understand, and simply a pleasure to work with.', aboutNext:'We started with Seynera Reader, an app for reading e-books. More ideas and projects are ahead — and, of course, new versions of what we have already created.', contactsTitle:'Get in touch', contactsIntro:'Find our projects and updates on the studio’s GitHub profile.', contactsGithub:'As Is Works on GitHub',
    temporary:'This program page is in development.', copyright:'All rights reserved.'
  }
} as const;
export type Language = keyof typeof dictionary;
