import _ from 'lodash'
import { words } from './words'
import { phrases } from './phrases'
import Sounds from './sounds'
import { Language, WordsInterface } from './interfaces'

export function getLangWords (language: string):string[] {
  return words.map((item: WordsInterface) => {
    return _.get(item, language)
  })
}

export const rusWords : string[] = getLangWords('rus')
export const tatWords: string[] = getLangWords('tat')

export const rusPhrases :string[] = getLangWords('rus')
export const tatPhrases: string[] = getLangWords('tat')

// ############### //

interface Option {
  id: number,
  text: string
}
interface QuestionInterface {
  id: number,
  questionText: string,
  correct: 1,
  options:Option[],
  audio: string
}

export function resList (
  firstLanguage: Language,
  secondLanguage: Language,
  firstArr: string[],
  secondArr: string[],
  base: Array<WordsInterface>
) : QuestionInterface[] {
  return base.map((item: any, index: number) => {
    const { audio } = item
    const questionText = item[firstLanguage]
    const properAnswer = item[secondLanguage]

    const ArrClone = _.clone(secondArr)

    const firstIndex = _.indexOf(ArrClone, item[secondLanguage])
    ArrClone.splice(firstIndex, 1)

    const second = _.sample(ArrClone)
    const secondIndex = _.indexOf(ArrClone, second)

    ArrClone.splice(secondIndex, 1)
    const third = _.sample(ArrClone)
    const thirdIndex = _.indexOf(ArrClone, third)
    ArrClone.splice(thirdIndex, 1)
    const fourth = _.sample(ArrClone)
    const shuffledOptions = _.shuffle([
      { id: 1, text: properAnswer },
      { id: 2, text: second },
      { id: 3, text: third },
      { id: 4, text: fourth }
    ])
    return {
      id: index,
      questionText: questionText,
      correct: 1,
      options: shuffledOptions,
      audio: audio
    }
  })
}

export function getWordsFirstSecond (
  firstLanguage: Language,
  secondLanguage: Language,
  firstArr: string[],
  secondArr: string[],
  base: Array<WordsInterface>
) {
  const resListFirstSecond = resList(
    firstLanguage,
    secondLanguage,
    firstArr,
    secondArr,
    base
  )
  const resListSecondFirst = resList(
    secondLanguage,
    firstLanguage,
    secondArr,
    firstArr,
    base
  )
  return {
    firstLanguage: resListFirstSecond,
    secondLanguage: resListSecondFirst
  }
}

export const wordsTatRus = getWordsFirstSecond(
  Language.tat,
  Language.rus,
  tatWords,
  rusWords,
  words
)

export const phrasesTatRus = getWordsFirstSecond(
  Language.tat,
  Language.rus,
  rusPhrases,
  tatPhrases,
  phrases
)

export const collectPhrasesTatRus = getWordsFirstSecond(
  Language.tat,
  Language.rus,
  tatPhrases,
  rusPhrases,
  phrases
)

interface TwoLanguageQuestionsInterface {
  firstLanguage : QuestionInterface[],
  secondLanguage : QuestionInterface[]
}
interface WordInterface {
  audio:string,
  eng: string,
  lat:string,
  rus: string,
  tat: string,
}
export interface InitialStateInterface {
  chosenGame: string;
  gameState: 'welcome' | 'words' | 'phrases' | 'collect' | 'result';
  language: Language;
  firstLanguage: Language;
  secondLanguage: Language;
  result: Array<any>;
  finished: boolean;
  currentQuestionIndex: number;
  words: TwoLanguageQuestionsInterface | [];
  phrases: TwoLanguageQuestionsInterface | [];
  collect: any;
  initialQuestionIndex?: 0;
  word: WordInterface[];
  sounds: any;
}

export const initialState: InitialStateInterface = {
  chosenGame: '',
  gameState: 'welcome',
  language: Language.rus,
  firstLanguage: Language.tat,
  secondLanguage: Language.rus,
  result: [],
  finished: false,
  currentQuestionIndex: 0,
  initialQuestionIndex: 0,
  word: [],
  words: [],
  phrases: [],
  collect: [],
  sounds: Sounds
}
