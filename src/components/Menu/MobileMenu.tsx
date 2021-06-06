import React, { useContext, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AppContext from '../../AppContext'
import { MenuOutlined } from '@ant-design/icons'

import Text from '../../ui/Text'
import Icon from '../../ui/Icon'
import i18n from 'i18next'
import { MenuComponentInterface, MenuInterface, StyledMenuInterface } from './interfaces'

const Close = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`

const Styled = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 0;
  min-height: 350px;
  width: 300px;
  max-width: 80%;
  background: #ffffff;
  box-shadow: 0px 5px 13px rgba(3, 32, 4, 0.1);
  border-radius: 0 0 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledMenu = ({ arr, setVisible }: StyledMenuInterface) => {
  const res = arr.map((item, index) => {
    const { text, cb, id } = item
    return (
      <li
        key={text}
        id={id || undefined}
        style={{
          marginBottom: 16,
          cursor: 'pointer'
        }}
      >
        <Text
          huge
          onClick={() => {
            setVisible(false)
            cb()
          }}
        >
          {text}
        </Text>
      </li>
    )
  })
  return (
    <Styled className={'menu'}>
      <ul>{res}</ul>
      <Close>
        <Icon
          icon={'close'}
          siz={32}
          onClick={() => {
            setVisible(false)
          }}
        />
      </Close>
    </Styled>
  )
}

export default ({ user }: MenuComponentInterface) => {
  const history = useHistory()
  const { state, setState, setModalVisible } = useContext(AppContext)
  const [mainMenuVisible, setMainMenuVisible] = useState(false)

  const ref = useDetectClickOutside({ onTriggered: () => setMainMenuVisible(false) })
  const MainMenuList: MenuInterface[] = [
    {
      text: i18n.t('home'),
      cb: () => {
        history.push('/')
      }
    },
    {
      text: user ? i18n.t('profile') : i18n.t('login'),
      cb: () => {
        user ? history.push('/user') : setModalVisible(true)
      }
    }

  ]

  return (
    <div id="menu" ref={ref}>
      <MenuOutlined
        style={{ fontSize: 24 }}
        onClick={() => {
          setMainMenuVisible(true)
          setState({ ...state, menuClosed: false })
        }}
      />
      {mainMenuVisible
        ? (
        <StyledMenu arr={MainMenuList} visible={mainMenuVisible} setVisible={setMainMenuVisible} />
          )
        : null}
    </div>
  )
}
