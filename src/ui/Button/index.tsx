import React from 'react'
import classnames from 'classnames'
import classes from './Button.module.scss'

export const Button = ({ children, ...props } : any) => {
  return (
    <button className={classnames(classes.button)} {...props}>
      {children}
    </button>
  )
}
