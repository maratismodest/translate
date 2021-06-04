import React, { useContext } from 'react'
import { NewWord } from './NewWord'
import { CourseContext } from '../../index'

export const Topic = () => {
  const { word } = useContext(CourseContext)
  console.log(word)
  if (!word) {
    return <div>Loader..</div>
  }
  return (
    <div>
      <h1>Topic</h1>
      <NewWord />
    </div>
  )
}
