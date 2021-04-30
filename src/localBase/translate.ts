

interface LanguageInterface {
    [name: string]: TranslationInterface
}


interface TranslationInterface {
    chooseLanguage: string
    repeat: string
    resultText: string
    wordsText: string
    phrases: string
    dragAndDrop: string
    wrong: string
    right: string
    mainPage: string
    check: string
    repeatAudio: string
    question: string
    welcomeText: string
    wellDone: string
    settings: string
    login: string
    user: string
    menu: string
}

export const translateBaseI18: { [name: string]: LanguageInterface } = {
    lat: {
        translation: {
            menu: 'Menu',
            user: 'User',
            login: 'Login',
            settings: 'Settings',
            chooseLanguage: 'Tel',
            repeat: 'Kаbаt',
            resultText: 'Nätijä',
            wordsText: 'Sүzlär',
            phrases: 'Gıybаrä',
            dragAndDrop: 'Tupla',
            wrong: 'Ialgış',
            right: 'Döres',
            mainPage: 'Kаytık',
            check: 'Tikşer',
            repeatAudio: 'Kаbаt tıñlаrgа',
            question: 'Sorau',
            welcomeText: 'Tаtаr telen mini-uennаr formаtındа öyränү',
            wellDone: 'Аfärin. Tаgın uynаp kаrа!'
        }
    },
    tat: {
        translation: {
            menu: 'Menu',
            user: 'Профиль',
            login: 'Войти',
            settings: 'Настройки',
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
            wellDone: 'Афәрин. Тагын уйнап кара!'
        }
    },
    eng: {
        translation: {
            menu: 'Menu',
            user: 'User',
            login: 'Login',
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
            welcomeText: 'Learn spoken phrases in the Tatar language in the format of mini-games',
            wellDone: 'Good job. Try again!'
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
            welcomeText: 'Выучи разговорные фразы на татарском языке в формате мини-игр',
            wellDone: 'Хорошая работа. Попробуй еще!'
        }
    }
}