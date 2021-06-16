import React, { useContext, useState } from 'react'
import i18n from 'i18next'
import { useHistory } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { Menu } from 'antd'
import classes from './DesktopMenu.module.scss'
import { AuthContext } from '../../context/AuthContext'

export const DesktopMenu = () => {
  const user = useContext(AuthContext)
  const { setModalVisible } = useContext(AppContext)
  const [menuState, setMenuState] = useState({ current: 'home' })
  const history = useHistory()
  const handleClick = (e: any) => {
    setMenuState({ current: e.key })
  }

  return (
    <Menu className={classes.desktop} onClick={handleClick} selectedKeys={[menuState.current]} mode="horizontal">
      <Menu.Item key="home" onClick={() => history.push('/')}>
      {i18n.t('home')}
    </Menu.Item>
      {user
        ? <Menu.Item key="profile" onClick={() => history.push('/user')}>
          {i18n.t('profile')}
        </Menu.Item>
        : (
        <Menu.Item key="login" onClick={() => setModalVisible(true)}>
          {i18n.t('login')}
        </Menu.Item>
          )}

    </Menu>
  )
}
