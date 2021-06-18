import React from 'react'

import { GuessPhrase } from './GuessPhrase'
import { PhrasesLayout } from '../../Layouts/PhrasesLayout/PhrasesLayout'

export default function Default () {
  return <PhrasesLayout component={<GuessPhrase />}/>
}
