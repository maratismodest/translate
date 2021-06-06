import React, { useContext, useState } from 'react'
import i18n from 'i18next'
import { useHistory } from 'react-router-dom'
import AppContext from '../../AppContext'
import styled from 'styled-components'
import { Menu } from 'antd'
import { MenuComponentInterface } from './interfaces'

export const DesktopMenu = ({ user }: MenuComponentInterface) => {
  const StyledMenu = styled(Menu)`
    background: none;
    border: none;
    font-size: 16px;
    line-height: 126%;
    font-weight: 600;
  `

  const { setModalVisible } = useContext(AppContext)
  const [menuState, setMenuState] = useState({ current: 'mail' })
  const history = useHistory()
  const handleClick = (e: any) => {
    setMenuState({ current: e.key })
  }

  return (
    <StyledMenu onClick={handleClick} selectedKeys={[menuState.current]} mode="horizontal">
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

    </StyledMenu>
  )
}
