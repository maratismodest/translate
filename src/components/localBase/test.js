import {phrases} from "./phrases";
import _ from "lodash";
import {engPhrases, rusPhrases, tatPhrases} from "./base";

function getPhrasesFirstSecond(firstLanguage, secondLanguage) {
    let firstArr = [];
    switch (secondLanguage) {
        case 'rus':
            firstArr = rusPhrases;
            break;
        case 'tat':
            firstArr = tatPhrases;
            break;
        case 'eng':
            firstArr = engPhrases;
            break;
        default:
            firstArr = undefined;
    }


    const resPhrasesFirstSecond = phrases.map((item, index) => {
        let firstArrClone = _.clone(firstArr)

        const {audio} = item;
        const first = item[secondLanguage];
        const currentItemSecondLanguage = item[secondLanguage];

        const firstIndex = _.indexOf(firstArrClone, currentItemSecondLanguage);
        // console.log("firstIndex", firstIndex)
        firstArrClone.splice(firstIndex, 1);

        const second = _.sample(firstArrClone);
        const secondIndex = _.indexOf(firstArrClone, second);
        // console.log("secondIndex", secondIndex)
        firstArrClone.splice(secondIndex, 1);


        const third = _.sample(firstArrClone);
        const thirdIndex = _.indexOf(firstArrClone, third);
        // console.log("thirdIndex", thirdIndex)
        firstArrClone.splice(thirdIndex, 1);

        const fourth = _.sample(firstArrClone);
        const fourthIndex = _.indexOf(firstArrClone, fourth);
        // console.log("fourthIndex", fourthIndex)
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
    return resPhrasesFirstSecond
}