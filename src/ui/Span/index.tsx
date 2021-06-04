import React, { ReactNode } from 'react'
import cn from 'classnames'
import classes from './Span.module.scss'

interface SpanProps {
  light?: boolean;
  large?: boolean;
  small?: boolean;
  green?: boolean;
  color?: string;
  onClick?: any;
  huge?: boolean;
  bold?: boolean;
  pointer?: boolean;
  children: ReactNode;
  style?: any
}

export const Span = ({ children, color, ...props }: SpanProps) => {
  const classList = cn(classes.span, {
    [classes.green]: color === 'green',
    [classes.red]: color === 'red',
    [classes.bold]: props.bold,
    [classes.pointer]: props.pointer
  })
  return (
    <span className={classList} {...props}>
      {children}
    </span>
  )
}
