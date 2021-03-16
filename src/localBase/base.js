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
        mainPage: 'Вернуться на главную',
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
    const resList = words.map((item, index) => {
        return item[language];
    });
    return resList
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

function resList(firstLanguage, secondLanguage, firstArr, secondArr, base) {
    return base.map((item, index) => {
        // console.log("item: ", item)
        const {audio} = item;
        const questionText = item[firstLanguage];
        const properAnswer = item[secondLanguage];

        const ArrClone = _.clone(secondArr);

        const firstIndex = _.indexOf(ArrClone, item[secondLanguage]);
        ArrClone.splice(firstIndex, 1);

        const second = _.sample(ArrClone);
        const secondIndex = _.indexOf(ArrClone, second);

        ArrClone.splice(secondIndex, 1);
        const third = _.sample(ArrClone);
        const thirdIndex = _.indexOf(ArrClone, third);
        ArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(ArrClone);
        const shuffledOptions = _.shuffle([
            {id: 1, text: properAnswer},
            {id: 2, text: second},
            {id: 3, text: third},
            {id: 4, text: fourth},
        ])
        return {
            id: index,
            questionText: questionText,
            correct: 1,
            options: shuffledOptions,
            audio: audio
        }
    });
}

export function getWordsFirstSecond(firstLanguage, secondLanguage, firstArr, secondArr, base) {
    const resListFirstSecond = resList(firstLanguage, secondLanguage, firstArr, secondArr, base)
    const resListSecondFirst = resList(secondLanguage, firstLanguage, secondArr, firstArr, base)
    return {firstLanguage: resListFirstSecond, secondLanguage: resListSecondFirst}
}

export const wordsTatRus = getWordsFirstSecond("tat", "rus", tatWords, rusWords, words)
export const wordsRusTat = getWordsFirstSecond("rus", "tat", rusWords, tatWords, words)

export const wordsTatEng = getWordsFirstSecond("tat", "eng", tatWords, engWords, words)
export const wordsEngTat = getWordsFirstSecond("eng", "tat", engWords, tatWords, words)

export function getPhrasesFirstSecond(firstLanguage, secondLanguage, firstArr, secondArr, base) {
    const resListFirstSecond = resList(firstLanguage, secondLanguage, firstArr, secondArr, base)
    const resListSecondFirst = resList(secondLanguage, firstLanguage, secondArr, firstArr, base)
    return {firstLanguage: resListFirstSecond, secondLanguage: resListSecondFirst}

}

export const phrasesRusTat = getPhrasesFirstSecond("tat", "rus", tatPhrases, rusPhrases, phrases)
export const phrasesTatRus = getPhrasesFirstSecond("tat", "rus", rusPhrases, tatPhrases, phrases)
export const phrasesTatEng = getPhrasesFirstSecond("tat", "rus", tatPhrases, engPhrases, phrases)
export const phrasesEngTat = getPhrasesFirstSecond("tat", "rus", engPhrases, tatPhrases, phrases)
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
