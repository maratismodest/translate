import React from 'react'
import { CollectWordLayout } from '../CollectWordLayout/CollectWordLayout'
import { CollectWord } from './CollectWord'
// import { CollectWord } from './CollectWord'

export const Test = () => {
  return (
    <CollectWordLayout component={<CollectWord />}/>
  )
}

export default Test
// export default <PhrasesLayout component={<CollectWord />} />
