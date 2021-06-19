import React from 'react'
import { Typography } from 'antd'
import classes from './Header.module.scss'
import cn from 'classnames'

// interface Props {
//   bold?: boolean;
//   color?: string;
// }

export const Header = ({ bold, color, ...props } : any) => {
  return (
    <Typography className={cn(classes.header, {
      [classes.red]: color === 'red',
      [classes.green]: color === 'green',
      [classes.bold]: bold
    })} {...props}/>
  )
}

export default Header
