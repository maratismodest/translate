import _ from "lodash";
import sound from "../sounds/sound.mp3";
import {words} from "./words";
import {phrases} from "./phrases";


export const translateBase = {
    rus: {
        chooseLanguage: 'Язык',
        repeat: 'Повторить',
        resultText: 'Результат',
        wordsText: 'Слова',
        phrases: 'Фразы',
        dragAndDrop: 'Собери',
        wrong: 'Неверно',
        right: 'Верно',
        mainPage: 'На главную',
        check: 'Проверить',
        repeatAudio: 'Повторить',
        question: 'Вопрос',
    },
    tat: {
        chooseLanguage: 'Тел',
        repeat: 'Кабат',
        resultText: 'Нәтиҗә',
        wordsText: 'Сүзләр',
        phrases: 'Гыйбарә',
        dragAndDrop: 'Тупла',
        wrong: 'Ялгыш',
        right: 'Шулай',
        mainPage: 'Кайтык',
        check: 'Тикшер',
        repeatAudio: 'Кабат',
        question: 'Сорау',
    },
    eng: {
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
        repeatAudio: 'Repeat',
        question: 'Question',
    },
    engtat: {
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
        repeatAudio: 'Repeat',
        question: 'Question',
    },
    tateng: {
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
        repeatAudio: 'Repeat',
        question: 'Question',
    }

}


function getLangWords(language = 'rus') {
    const resWords = words.map((item, index) => {
        return item[language];
    });
    return resWords
}

export const rusWords = getLangWords('rus')
export const tatWords = getLangWords('tat')
export const engWords = getLangWords('eng')


function getLangPhrases(language = 'rus') {
    const resPhrases = phrases.map((item, index) => {
        return item[language];
    });
    return resPhrases
}

export const rusPhrases = getLangPhrases('rus')

export const tatPhrases = getLangPhrases('tat')

export const engPhrases = getLangPhrases('eng')


export function getWordsFirstSecond(firstLanguage, secondLanguage) {
    let firstArr = [];
    let secondArr = [];
    switch (firstLanguage) {
        case 'rus':
            firstArr = rusWords;
            break;
        case 'tat':
            firstArr = tatWords;
            break;
        case 'eng':
            firstArr = engWords;
            break;
        default:
            firstArr = undefined;
    }

    switch (secondLanguage) {
        case 'rus':
            secondArr = rusWords;
            break;
        case 'tat':
            secondArr = tatWords;
            break;
        case 'eng':
            secondArr = engWords;
            break;
        default:
            secondArr = undefined;
    }


    const resWordsFirstSecond = words.map((item, index) => {
        const {audio} = item;
        let ArrClone = _.clone(secondArr);
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(ArrClone, currentItemSecondLanguage);
        ArrClone.splice(firstIndex, 1);

        const second = _.sample(ArrClone);
        const secondIndex = _.indexOf(ArrClone, second);

        ArrClone.splice(secondIndex, 1);
        const third = _.sample(ArrClone);
        const thirdIndex = _.indexOf(ArrClone, third);
        ArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(ArrClone);
        const shuffledOptions = _.shuffle([
            {id: 1, text: first},
            {id: 2, text: second},
            {id: 3, text: third},
            {id: 4, text: fourth},
        ])
        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: shuffledOptions,
            audio: audio
        }
    });
    const resWordsSecondFirst = words.map((item, index) => {
        const {audio} = item;
        let ArrClone = _.clone(firstArr);
        const first = item[firstLanguage];
        const currentItemSecondLanguage = item[firstLanguage];

        const firstIndex = _.indexOf(ArrClone, currentItemSecondLanguage);
        ArrClone.splice(firstIndex, 1);

        const second = _.sample(ArrClone);
        const secondIndex = _.indexOf(ArrClone, second);

        ArrClone.splice(secondIndex, 1);
        const third = _.sample(ArrClone);
        const thirdIndex = _.indexOf(ArrClone, third);
        ArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(ArrClone);
        const shuffledOptions = _.shuffle([
            {id: 1, text: first},
            {id: 2, text: second},
            {id: 3, text: third},
            {id: 4, text: fourth},
        ])
        return {
            id: index,
            questionText: item[secondLanguage],
            correct: 1,
            options: shuffledOptions,
            audio: audio
        }
    });
    return {firstLanguage: resWordsFirstSecond, secondLanguage: resWordsSecondFirst}

}

export const wordsRusTat = getWordsFirstSecond("rus", "tat")
export const wordsTatRus = getWordsFirstSecond("tat", "rus")

export const wordsTatEng = getWordsFirstSecond("tat", "eng")
export const wordsEngTat = getWordsFirstSecond("eng", "tat")

export function getPhrasesFirstSecond(firstLanguage, secondLanguage) {
    let firstArr = [];
    let secondArr = [];
    switch (firstLanguage) {
        case 'rus':
            firstArr = rusWords;
            break;
        case 'tat':
            firstArr = tatWords;
            break;
        case 'eng':
            firstArr = engWords;
            break;
        default:
            firstArr = undefined;
    }

    switch (secondLanguage) {
        case 'rus':
            secondArr = rusWords;
            break;
        case 'tat':
            secondArr = tatWords;
            break;
        case 'eng':
            secondArr = engWords;
            break;
        default:
            secondArr = undefined;
    }


    const resWordsFirstSecond = phrases.map((item, index) => {

        let ArrClone = _.clone(secondArr);
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(ArrClone, currentItemSecondLanguage);
        ArrClone.splice(firstIndex, 1);

        const second = _.sample(ArrClone);
        const secondIndex = _.indexOf(ArrClone, second);

        ArrClone.splice(secondIndex, 1);
        const third = _.sample(ArrClone);
        const thirdIndex = _.indexOf(ArrClone, third);
        ArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(ArrClone);
        const shuffledOptions = _.shuffle([
            {id: 1, text: first},
            {id: 2, text: second},
            {id: 3, text: third},
            {id: 4, text: fourth},
        ])
        const {audio} =  item;
        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: shuffledOptions,
            audio: audio
        }
    });
    const resWordsSecondFirst = phrases.map((item, index) => {

        let ArrClone = _.clone(firstArr);
        const first = item[firstLanguage];
        const currentItemSecondLanguage = item[firstLanguage];

        const firstIndex = _.indexOf(ArrClone, currentItemSecondLanguage);
        ArrClone.splice(firstIndex, 1);

        const second = _.sample(ArrClone);
        const secondIndex = _.indexOf(ArrClone, second);

        ArrClone.splice(secondIndex, 1);
        const third = _.sample(ArrClone);
        const thirdIndex = _.indexOf(ArrClone, third);
        ArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(ArrClone);
        const {audio} =  item;
        const shuffledOptions = _.shuffle([
            {id: 1, text: first},
            {id: 2, text: second},
            {id: 3, text: third},
            {id: 4, text: fourth},
        ])
        return {
            id: index,
            questionText: item[secondLanguage],
            correct: 1,
            options: shuffledOptions,
            audio: audio
        }
    });
    return {firstLanguage: resWordsFirstSecond, secondLanguage: resWordsSecondFirst}

}

export const phrasesRusTat = getPhrasesFirstSecond("rus", "tat")
export const phrasesTatRus = getPhrasesFirstSecond("tat", "rus")
export const phrasesTatEng = getPhrasesFirstSecond("tat", "eng")
export const phrasesEngTat = getPhrasesFirstSecond("eng", "tat")
export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'tat',
    firstLanguage: 'tat',
    secondLanguage: 'rus',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    translate: translateBase.tat,
    words: wordsTatRus,
    phrases: phrasesTatRus,
}