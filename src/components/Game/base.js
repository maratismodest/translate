import {words} from "./words";
import {phrases} from "./phrases";
import _ from "lodash";
import sound from "../../sounds/sound.mp3";


export const translateBase = {
    rus: {
        chooseLanguage: 'Язык',
        repeat: 'Повторить',
        resultText: 'Результат',
        words: 'Слова',
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
        words: 'Сүзләр',
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
        words: 'Words',
        phrases: 'Phrases',
        dragAndDrop: 'DragAndDrop',
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
        words: 'Words',
        phrases: 'Phrases',
        dragAndDrop: 'DragAndDrop',
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
        words: 'Words',
        phrases: 'Phrases',
        dragAndDrop: 'DragAndDrop',
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

        let secondArrClone = _.clone(secondArr);
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        // console.log("firstIndex",firstIndex)
        secondArrClone.splice(firstIndex, 1);

        const second = _.sample(secondArrClone);
        const secondIndex = _.indexOf(secondArrClone, second);
        // console.log("secondIndex",secondIndex)
        secondArrClone.splice(secondIndex, 1);
        const third = _.sample(secondArrClone);
        const thirdIndex = _.indexOf(secondArrClone, third);
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

}

export const wordsRusTat = getWordsFirstSecond("rus", "tat")
export const wordsTatRus = getWordsFirstSecond("tat", "rus")
console.log("wordsTatRus",wordsTatRus)
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
        let secondArrClone = _.clone(secondArr)

        const {audio} = item;
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(secondArrClone, currentItemSecondLanguage);
        console.log("firstIndex", firstIndex)
        secondArrClone.splice(firstIndex, 1);

        const second = _.sample(secondArrClone);
        const secondIndex = _.indexOf(secondArrClone, second);
        console.log("secondIndex", secondIndex)
        secondArrClone.splice(secondIndex, 1);


        const third = _.sample(secondArrClone);
        const thirdIndex = _.indexOf(secondArrClone, third);
        console.log("thirdIndex", thirdIndex)
        secondArrClone.splice(thirdIndex, 1);

        const fourth = _.sample(secondArrClone);
        const fourthIndex = _.indexOf(secondArrClone, fourth);
        console.log("fourthIndex", fourthIndex)

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
export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    language: 'tat',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    translate: translateBase.rus,
    // questions: _.shuffle(wordsTatRus).slice(1, 6),
    // phrases: _.shuffle(phrasesTatRus).slice(1, 6),
}