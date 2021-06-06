import React from 'react'
import play from '../../assets/play.svg'
import classes from './Play.module.scss'

export const Play = () => {
  return <img className={classes.play} src={play} alt={'play'} />
}

export default Play
