import _ from "lodash";

import { words, WordsInterface } from "./words";
import { phrases } from "./phrases";

function getLangWords(language: string = "rus") {
  return words.map((item: WordsInterface, index: number) => {
    const res: string = _.get(item, language);
    return res;
  });
}

export const rusWords = getLangWords("rus");
export const tatWords = getLangWords("tat");
export const engWords = getLangWords("eng");
export const latWords = getLangWords("lat");

function getLangPhrases(language = "rus") {
  return phrases.map((item, index) => {
    const res: string = _.get(item, language);
    return res;
  });
}

export const rusPhrases = getLangPhrases("rus");

export const tatPhrases = getLangPhrases("tat");

export const engPhrases = getLangPhrases("eng");

export const latPhrases = getLangPhrases("lat");

function resList(
  firstLanguage: any,
  secondLanguage: any,
  firstArr: any,
  secondArr: any,
  base: any
) {
  return base.map((item: any, index: number) => {
    // console.log("item: ", item)
    const { audio } = item;
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
      { id: 1, text: properAnswer },
      { id: 2, text: second },
      { id: 3, text: third },
      { id: 4, text: fourth },
    ]);
    return {
      id: index,
      questionText: questionText,
      correct: 1,
      options: shuffledOptions,
      audio: audio,
    };
  });
}

export function getWordsFirstSecond(
  firstLanguage: any,
  secondLanguage: any,
  firstArr: any,
  secondArr: any,
  base: any
) {
  const resListFirstSecond = resList(
    firstLanguage,
    secondLanguage,
    firstArr,
    secondArr,
    base
  );
  const resListSecondFirst = resList(
    secondLanguage,
    firstLanguage,
    secondArr,
    firstArr,
    base
  );
  return {
    firstLanguage: resListFirstSecond,
    secondLanguage: resListSecondFirst,
  };
}

export const wordsTatRus = getWordsFirstSecond(
  "tat",
  "rus",
  tatWords,
  rusWords,
  words
);
export const wordsTatEng = getWordsFirstSecond(
  "tat",
  "eng",
  tatWords,
  engWords,
  words
);
export const wordsLatEng = getWordsFirstSecond(
  "lat",
  "eng",
  latWords,
  engWords,
  words
);

export const wordsLatLat = getWordsFirstSecond(
  "lat",
  "lat",
  latWords,
  latWords,
  words
);

export function getPhrasesFirstSecond(
  firstLanguage: any,
  secondLanguage: any,
  firstArr: any,
  secondArr: any,
  base: any
) {
  const resListFirstSecond = resList(
    firstLanguage,
    secondLanguage,
    firstArr,
    secondArr,
    base
  );
  const resListSecondFirst = resList(
    secondLanguage,
    firstLanguage,
    secondArr,
    firstArr,
    base
  );
  return {
    firstLanguage: resListFirstSecond,
    secondLanguage: resListSecondFirst,
  };
}

export const phrasesRusTat = getPhrasesFirstSecond(
  "tat",
  "rus",
  tatPhrases,
  rusPhrases,
  phrases
);
export const phrasesTatRus = getPhrasesFirstSecond(
  "rus",
  "tat",
  rusPhrases,
  tatPhrases,
  phrases
);
export const phrasesTatEng = getPhrasesFirstSecond(
  "tat",
  "eng",
  tatPhrases,
  engPhrases,
  phrases
);

export const phrasesLatEng = getPhrasesFirstSecond(
  "tat",
  "lat",
  latPhrases,
  engPhrases,
  phrases
);
export const phrasesEngTat = getPhrasesFirstSecond(
  "eng",
  "tat",
  engPhrases,
  tatPhrases,
  phrases
);
export const phrasesLatLat = getPhrasesFirstSecond(
  "lat",
  "lat",
  latPhrases,
  latPhrases,
  phrases
);

export const collectPhrasesTatRus = getPhrasesFirstSecond(
  "tat",
  "rus",
  tatPhrases,
  rusPhrases,
  phrases
);
export const collectPhrasesLatLat = getPhrasesFirstSecond(
  "lat",
  "lat",
  latPhrases,
  latPhrases,
  phrases
);

export interface InitialStateInterface {
  chosenGame: string;
  gameState: "welcome" | "words" | "phrases" | "collect" | "result";
  language: "rus" | "tat" | "eng" | "lat";
  firstLanguage: "rus" | "tat" | "eng" | "lat";
  secondLanguage: "rus" | "tat" | "eng" | "lat";
  result: Array<any>;
  finished: boolean;
  currentQuestionIndex: any;
  words: any;
  phrases: any;
  collect: any;
  initialQuestionIndex?: 0;
  answer: string;
  word: any;
}

export const initialState: InitialStateInterface = {
  chosenGame: "",
  gameState: "welcome",
  language: "rus",
  firstLanguage: "tat",
  secondLanguage: "rus",
  result: [],
  finished: false,
  currentQuestionIndex: 0,
  initialQuestionIndex: 0,
  word: words,
  words: wordsTatRus,
  phrases: phrasesTatRus,
  collect: phrases,
  answer: "-",
};
