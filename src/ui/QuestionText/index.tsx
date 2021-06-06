import React from 'react'
import classes from './QuestionText.module.scss'

interface QuestionTextInterface {
    title: string
}
export const QuestionText = ({ title } : QuestionTextInterface) => {
  return <h4 className={classes.play}>{title}</h4>
}

export default QuestionText
