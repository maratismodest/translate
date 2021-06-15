import React from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { isMobile } from 'react-device-detect'
import Logo from './welcome.svg'
import { Button, Header } from 'ui'
import classes from './Welcome.module.scss'
import cn from 'classnames'

const Desktop = () => {
  return (
    <div className={classes.welcomeDesktop}>
      <div className={classes.welcomeDesktopWallPaper}>
        <img src={Logo} alt="Chamala" width="100%" />
      </div>
      <div className={classes.welcomeDesktopBegin}>
        <Header level={1} className={cn('mb-68', 'ft-36')}>
          {i18n.t('welcomeText')}
        </Header>
        <Link to="/pickgame">
          <Button>{i18n.t('start')}</Button>
        </Link>
      </div>
    </div>
  )
}
const Welcome = () => {
  if (isMobile) {
    return (
      <div className={classes.welcomeMobile}>
        <Header level={2}>{i18n.t('welcomeText')}</Header>
        <div>
          <img src={Logo} alt="Chamala" width="100%" />
        </div>
        <Link to="/pickgame">
          <Button>{i18n.t('start')}</Button>
        </Link>
      </div>
    )
  }
  return <Desktop />
}

export default Welcome
