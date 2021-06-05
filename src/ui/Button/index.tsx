import React from 'react'
import classnames from 'classnames'
import classes from './Button.module.scss'
// interface Props {
//   height: number;
//   name: string;
//   size?: string;
//   small?: boolean;
//   transparent?: boolean;
//   big?: boolean;
//   color: string;
//   key: string;
//   onClick: any;
//   htmlType?: string;
//   disabled?: boolean;
//   green?: boolean;
//   large?: boolean;
//   medium?: boolean;
//   normal?: boolean;
// }

export const Button = ({ children, ...props } : any) => {
  return (
    <button className={classnames(classes.button)} {...props}>
      {children}
    </button>
  )
}
