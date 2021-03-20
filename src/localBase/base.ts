import _ from "lodash";

import {words, WordsInterface} from "./words";
import {phrases} from "./phrases";

export interface LanguageInterface {
    chooseLanguage: string
    repeat: string
    resultText: string
    wordsText: string
    phrases: string
    dragAndDrop:string
    wrong: string
    right: string
    mainPage: string
    check: string
    repeatAudio: string
    question: string
    welcomeText: string
    wellDone: string
}

export const translateBase : { [name: string]: LanguageInterface } = {
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
        repeatAudio: 'Воспроизвести',
        question: 'Вопрос',
        welcomeText: 'Выучи разговорные фразы на татарском языке в формате мини-игр',
        wellDone: 'Хорошая работа. Попробуй еще!'
    },
    tat: {
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
        welcomeText: 'Татар телен мини-уеннар форматында татар телен өйрәнү',
        wellDone: 'Афәрин. Тагын уйнап кара!'
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
        repeatAudio: 'Replay',
        question: 'Question',
        welcomeText: 'Learn spoken phrases in the Tatar language in the format of mini-games',
        wellDone: 'Good job. Try again!'
    }
}

function getLangWords(language: string = 'rus') {
    return words.map((item: WordsInterface, index:number) => {
        const res : string = _.get(item,language)
        return res;
    });
}



export const rusWords = getLangWords('rus')
export const tatWords = getLangWords('tat')
export const engWords = getLangWords('eng')


function getLangPhrases(language = 'rus') {
    return phrases.map((item, index) => {
        const res : string = _.get(item,language)
        return res;
    });
}

export const rusPhrases = getLangPhrases('rus')

export const tatPhrases = getLangPhrases('tat')

export const engPhrases = getLangPhrases('eng')


function resList(firstLanguage: any, secondLanguage: any, firstArr: any, secondArr: any, base: any) {
    return base.map((item: any, index: number) => {
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

export function getWordsFirstSecond(firstLanguage: any, secondLanguage: any, firstArr: any, secondArr: any, base: any) {
    const resListFirstSecond = resList(firstLanguage, secondLanguage, firstArr, secondArr, base)
    const resListSecondFirst = resList(secondLanguage, firstLanguage, secondArr, firstArr, base)
    return {firstLanguage: resListFirstSecond, secondLanguage: resListSecondFirst}
}

export const wordsTatRus = getWordsFirstSecond("tat", "rus", tatWords, rusWords, words)
export const wordsTatEng = getWordsFirstSecond("tat", "eng", tatWords, engWords, words)

export function getPhrasesFirstSecond(firstLanguage: any, secondLanguage: any, firstArr: any, secondArr: any, base: any) {
    const resListFirstSecond = resList(firstLanguage, secondLanguage, firstArr, secondArr, base)
    const resListSecondFirst = resList(secondLanguage, firstLanguage, secondArr, firstArr, base)
    return {firstLanguage: resListFirstSecond, secondLanguage: resListSecondFirst}

}

export const phrasesRusTat = getPhrasesFirstSecond("tat", "rus", tatPhrases, rusPhrases, phrases)
export const phrasesTatRus = getPhrasesFirstSecond("rus", "tat", rusPhrases, tatPhrases, phrases)
export const phrasesTatEng = getPhrasesFirstSecond("tat", "eng", tatPhrases, engPhrases, phrases)
export const phrasesEngTat = getPhrasesFirstSecond("eng", "tat", engPhrases, tatPhrases, phrases)

export const collectPhrasesTatRus = getPhrasesFirstSecond("tat", "rus", tatPhrases, rusPhrases, phrases)

export interface InitialStateInterface {
    chosenGame: any
    gameState: any
    language: any
    firstLanguage: any
    secondLanguage: any
    result: any
    finished: any
    currentQuestionIndex: any
    translate: any
    words: Array<WordsInterface>
    phrases: any
    collect: any
}

export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'rus',
    firstLanguage: 'tat',
    secondLanguage: 'rus',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    translate: translateBase.rus,
    words: wordsTatRus,
    phrases: phrasesTatRus,
    collect: phrases
}
