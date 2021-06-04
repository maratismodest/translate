interface LanguageInterface {
  [name: string]: TranslationInterface;
}

interface TranslationInterface {
  chooseLanguage: string;
  repeat: string;
  resultText: string;
  wordsText: string;
  phrases: string;
  dragAndDrop: string;
  wrong: string;
  right: string;
  mainPage: string;
  check: string;
  repeatAudio: string;
  question: string;
  welcomeText: string;
  wellDone: string;
  settings: string;
  login: string;
  user: string;
  menu: string;
  start: string;
  home: string;
  languages: string;
  profile: string;
  collectWord: string;
  collectPhrase: string;
  next: string;
  pickGame: string;
  forgotPassword: string;
  password: string;
}

export const translateBaseI18: { [name: string]: LanguageInterface } = {
  eng: {
    translation: {
      menu: 'Menu',
      user: 'User',
      login: 'ModalLogin',
      settings: 'Settings',
      chooseLanguage: 'Language',
      repeat: 'Repeat',
      resultText: 'Result',
      wordsText: 'Words',
      phrases: 'Phrases',
      dragAndDrop: 'Collect',
      wrong: 'Wrong',
      right: 'Correct',
      mainPage: 'Main Page',
      check: 'Check',
      repeatAudio: 'Replay',
      question: 'Question',
      welcomeText:
        'Learn spoken phrases in the Tatar language in the format of mini-games',
      wellDone: 'Good job. Try again!',
      start: 'Start',
      home: 'Home',
      languages: 'Languages',
      profile: 'Profile',
      collectWord: 'Collect the word',
      collectPhrase: 'Collect the phrase',
      next: 'Next',
      pickGame: 'Pick a Game',
      forgotPassword: 'Forgot Password?',
      password: 'Password'
    }
  },
  rus: {
    translation: {
      menu: 'Menu',
      user: 'Личный кабинет',
      login: 'Войти',
      settings: 'Настройки',
      chooseLanguage: 'Язык',
      repeat: 'Повторить',
      resultText: 'Результат',
      wordsText: 'Слова',
      phrases: 'Фразы',
      dragAndDrop: 'Собери',
      wrong: 'Неверно',
      right: 'Верно',
      mainPage: 'Вернуться на главную',
      check: 'Проверить',
      repeatAudio: 'Воспроизвести',
      question: 'Вопрос',
      welcomeText: 'Изучение татарского языка в формате мини-игр',
      wellDone: 'Хорошая работа. Попробуй еще!',
      start: 'Начать',
      home: 'На главную',
      languages: 'Языки',
      profile: 'Профиль',
      collectWord: 'Собери слово',
      collectPhrase: 'Собери фразу',
      next: 'Далее',
      pickGame: 'Выберите игру',
      forgotPassword: 'Забыли Пароль?',
      password: 'Пароль'
    }
  },
  lat: {
    translation: {
      check: 'Tikşer',
      chooseLanguage: 'Tel',
      dragAndDrop: 'Tupla',
      login: 'Keregez',
      mainPage: 'Qaytık',
      menu: 'Meniu',
      phrases: 'Gıybarä',
      question: 'Sorau',
      repeat: 'Qabat',
      repeatAudio: 'Qabat tıñlarğa',
      resultText: 'Nätijä',
      right: 'Döres',
      settings: 'Köyläneş',
      user: 'Profilь',
      welcomeText: 'Tatar telen mini-uennar formatında öyränү',
      wellDone: 'Afärin. Tagın uynap qara!',
      wordsText: 'Sүzlär',
      wrong: 'Ialgış',
      start: 'Başlarğa',
      home: 'Öygä',
      languages: 'Tel',
      profile: "Profil'",
      collectWord: 'Sүz jıy!',
      collectPhrase: 'Frazanı jıy',
      next: 'Alğa',
      pickGame: 'Uen caylagız',
      forgotPassword: 'Parolьne Onıttıgızmı?',
      password: "Parol'"
    }
  },
  tat: {
    translation: {
      menu: 'Меню',
      user: 'Профиль',
      login: 'Керегез',
      settings: 'Көйләнеш',
      chooseLanguage: 'Тел',
      repeat: 'Кабат',
      resultText: 'Нәтиҗә',
      wordsText: 'Сүзләр',
      phrases: 'Гыйбарә',
      dragAndDrop: 'Тупла',
      wrong: 'Ялгыш',
      right: 'Дөрес',
      mainPage: 'Кайтык',
      check: 'Тикшер',
      repeatAudio: 'Кабат тыңларга',
      question: 'Сорау',
      welcomeText: 'Татар телен мини-уеннар форматында өйрәнү',
      wellDone: 'Афәрин. Тагын уйнап кара!',
      start: 'Башларга',
      home: 'Өйгә',
      languages: 'Тел',
      profile: 'Профиль',
      collectWord: 'Сүз җый',
      collectPhrase: 'Фразаны җый',
      next: 'Алга',
      pickGame: 'Уен cайлагыз',
      forgotPassword: 'Парольне Оныттыгызмы?',
      password: 'Пароль'
    }
  }
}
