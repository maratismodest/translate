import _ from 'lodash'
import Sounds from './sounds'
import {
  InitialStateInterface,
  Language,
  QuestionInterface,
  WordsInterface
} from './interfaces'

export function getLangWords (words: WordsInterface[], language: string):string[] {
  return words.map((item: WordsInterface) => {
    return _.get(item, language)
  })
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
