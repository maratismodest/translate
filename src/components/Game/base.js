import {words} from "./words";
import {phrases} from "./phrases";
import _ from "lodash";
import sound from "../../sounds/sound.mp3";


export const translateBase = {
    rus: {
        chooseLanguage: 'Язык',
        repeat: 'Повторить',
        resultText: 'Результат'
    },
    tat: {
        chooseLanguage: 'Тел',
        repeat: 'Кабат',
        resultText: 'Нәтиҗә'
    },
    eng: {
        chooseLanguage: 'Language',
        repeat: 'Repeat',
        resultText: 'Result'
    }

}


export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'rus',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    translate: translateBase.rus
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


function getWordsFirstSecond(firstLanguage, secondLanguage) {
    let secondArr = [];
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

        const secondArrClone = _.clone(secondArr)
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];
        const firstIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(firstIndex, 1);
        const second = _.sample(secondArrClone);
        const secondIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(secondIndex, 1);
        const third =_.sample(secondArrClone);
        const thirdIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(thirdIndex, 1);
        const fourth = _.sample(secondArrClone);

        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: [
                {id: 1, text: first},
                {id: 2, text: second},
                {id: 3, text: third},
                {id: 4, text: fourth},
            ],
            audio: sound
        }
    });
    return resWordsFirstSecond

    // const resWordsFirstSecond = words.map((item, index) => {
    //     return {
    //         id: index,
    //         questionText: item[firstLanguage],
    //         correct: 1,
    //         options: [
    //             {id: 1, text: item[secondLanguage]},
    //             {id: 2, text: _.sample(secondArr)},
    //             {id: 3, text: _.sample(secondArr)},
    //             {id: 4, text: _.sample(secondArr)},
    //         ],
    //         audio: sound
    //     }
    // });
    // return resWordsFirstSecond
}

export const wordsRusTat = getWordsFirstSecond("rus", "tat")
export const wordsTatRus = getWordsFirstSecond("tat", "rus")
export const wordsTatEng = getWordsFirstSecond("tat", "eng")
export const wordsEngTat = getWordsFirstSecond("eng", "tat")

function getPhrasesFirstSecond(firstLanguage, secondLanguage) {
    let secondArr = [];
    switch (secondLanguage) {
        case 'rus':
            secondArr = rusPhrases;
            break;
        case 'tat':
            secondArr = tatPhrases;
            break;
        case 'eng':
            secondArr = engPhrases;
            break;
        default:
            secondArr = undefined;
    }


    const resPhrasesFirstSecond = phrases.map((item, index) => {
        const secondArrClone = _.clone(secondArr)

        const {audio} = item;
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(firstIndex, 1);

        const second = _.sample(secondArrClone);
        const secondIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(secondIndex, 1);


        const third =_.sample(secondArrClone);
        const thirdIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        secondArrClone.splice(thirdIndex, 1);

        const fourth = _.sample(secondArrClone);

        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: [
                {id: 1, text: first},
                {id: 2, text: second},
                {id: 3, text: third},
                {id: 4, text: fourth},
            ],
            audio: audio
        }
    });
    return resPhrasesFirstSecond
}

export const phrasesRusTat = getPhrasesFirstSecond("rus", "tat")
export const phrasesTatRus = getPhrasesFirstSecond("tat", "rus")
export const phrasesTatEng = getPhrasesFirstSecond("tat", "eng")
export const phrasesEngTat = getPhrasesFirstSecond("eng", "tat")
