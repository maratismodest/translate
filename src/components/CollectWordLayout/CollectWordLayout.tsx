import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import { useQuery } from '@apollo/client'
import { GET_ALL_WORDS } from '../../graphql/query/word'
import { getLangWords, getWordsFirstSecond } from '../../localBase/base'
import { Language } from '../../localBase/interfaces'

export const CollectWordLayout = ({ component }: any) => {
  const { setState, state } = useContext(AppContext)

  const { data } = useQuery(GET_ALL_WORDS)
  const { word } = state

  useEffect(() => {
    if (word.length === 0 && data) {
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
  }, [data])

  return (
    <>
      {component}
    </>

  )
}
