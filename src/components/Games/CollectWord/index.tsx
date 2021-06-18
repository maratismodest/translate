import React from 'react'
import { WordsLayout } from '../../Layouts/WordsLayout/WordsLayout'
import { CollectWord } from './CollectWord'

export default function Default () {
  return <WordsLayout component={<CollectWord />}/>
}
