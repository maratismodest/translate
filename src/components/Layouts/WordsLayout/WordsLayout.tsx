import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import { useQuery } from '@apollo/client'
import { GET_ALL_WORDS } from '../../../graphql/query/word'
import { getLangWords, getWordsFirstSecond } from '../../../localBase/base'
import { Language } from '../../../localBase/interfaces'

export const WordsLayout = ({ component }: any) => {
  const { setState, state } = useContext(AppContext)

  const { data } = useQuery(GET_ALL_WORDS)
  const { word } = state

  if (word.length === 0) {
    if (data) {
      const words = data.getAllWords
      const rusWords : string[] = getLangWords(words, 'rus')
      const tatWords: string[] = getLangWords(words, 'tat')
      const wordsTatRus = getWordsFirstSecond(
        Language.tat,
        Language.rus,
        tatWords,
        rusWords,
        words
      )
      setState((prev: any) => ({ ...prev, word: words, words: wordsTatRus }))
    }
  }

  return (
    <>
      {component}
    </>

  )
}
