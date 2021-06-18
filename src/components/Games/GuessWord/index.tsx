import React from 'react'
import { WordsLayout } from '../../Layouts/WordsLayout/WordsLayout'
import { GuessWord } from './GuessWord'

export default function Default () {
  return <WordsLayout component={<GuessWord />}/>
}
