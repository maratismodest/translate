import React from 'react'
// import React, { useContext } from 'react'
// import AppContext from '../../../context/AppContext'
// import { useQuery } from '@apollo/client'
// import { getLangWords, getWordsFirstSecond } from '../../../localBase/base'
// import { Language } from '../../../localBase/interfaces'
// import { GET_ALL_PHRASES } from '../../../graphql/query/phrase'

export const PhrasesLayout = ({ component }: any) => {
  // const { setState, state } = useContext(AppContext)
  //
  // const { data } = useQuery(GET_ALL_PHRASES)
  // const { phrases } = state
  //
  // if (phrases.length === 0) {
  //   if (data) {
  //     const phrases = data.getAllPhrases
  //     const rusPhrases : string[] = getLangWords(phrases, 'rus')
  //     const tatPhrases: string[] = getLangWords(phrases, 'tat')
  //     const phrasesTatRus = getWordsFirstSecond(
  //       Language.tat,
  //       Language.rus,
  //       tatPhrases,
  //       rusPhrases,
  //       phrases
  //     )
  //     setState((prev : any) => ({ ...prev, phrases: phrasesTatRus, collect: phrases }))
  //   }
  // }

  return (
    <>
      {component}
    </>

  )
}
