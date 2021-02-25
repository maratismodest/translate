import {words} from "./words";
import {phrases} from "./phrases";
import _ from "lodash";
import sound from "../../sounds/sound.mp3";

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


function getWordsFirstSecond(firstLanguage , secondLanguage) {
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
        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: [
                {id: 1, text: item[secondLanguage]},
                {id: 2, text: _.sample(secondArr)},
                {id: 3, text: _.sample(secondArr)},
                {id: 4, text: _.sample(secondArr)},
            ],
            audio: sound
        }
    });
    return resWordsFirstSecond
}

export const wordsRusTat = getWordsFirstSecond("rus", "tat")
export const wordsTatRus = getWordsFirstSecond("tat", "rus")
export const wordsTatEng = getWordsFirstSecond("tat", "eng")
export const wordsEngTat = getWordsFirstSecond("eng", "tat")

function getPhrasesFirstSecond(firstLanguage , secondLanguage) {
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
        const {audio} = item;
        return {
            id: index,
            questionText: item[firstLanguage],
            correct: 1,
            options: [
                {id: 1, text: item[secondLanguage]},
                {id: 2, text: _.sample(secondArr)},
                {id: 3, text: _.sample(secondArr)},
                {id: 4, text: _.sample(secondArr)},
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
// export const phrasesRusTat = phrases.map((item, index) => {
//     const {tat, rus, audio} = item;
//     return {
//         id: index,
//         questionText: rus,
//         correct: 1,
//         options: [
//             {id: 1, text: tat},
//             {id: 2, text: _.sample(tatPhrases)},
//             {id: 3, text: _.sample(tatPhrases)},
//             {id: 4, text: _.sample(tatPhrases)},
//         ],
//         audio: audio
//     }
//
// })
// export const phrasesTatRus = phrases.map((item, index) => {
//     const {tat, rus, audio} = item;
//     return {
//         id: index,
//         questionText: tat,
//         correct: 1,
//         options: [
//             {id: 1, text: rus},
//             {id: 2, text: _.sample(rusPhrases)},
//             {id: 3, text: _.sample(rusPhrases)},
//             {id: 4, text: _.sample(rusPhrases)},
//         ],
//         audio: audio
//     }
//
// })
//
// export const phrasesTatEng = phrases.map((item, index) => {
//     const {tat, rus, eng, audio} = item;
//     return {
//         id: index,
//         questionText: tat,
//         correct: 1,
//         options: [
//             {id: 1, text: eng},
//             {id: 2, text: _.sample(engPhrases)},
//             {id: 3, text: _.sample(engPhrases)},
//             {id: 4, text: _.sample(engPhrases)},
//         ],
//         audio: audio
//     }
//
// })
// export const phrasesEngTat = phrases.map((item, index) => {
//     const {tat, rus, eng, audio} = item;
//     return {
//         id: index,
//         questionText: eng,
//         correct: 1,
//         options: [
//             {id: 1, text: tat},
//             {id: 2, text: _.sample(tatPhrases)},
//             {id: 3, text: _.sample(tatPhrases)},
//             {id: 4, text: _.sample(tatPhrases)},
//         ],
//         audio: audio
//     }
//
// })

