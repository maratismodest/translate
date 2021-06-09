import React, { useContext, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useHistory } from 'react-router-dom'
import AppContext from '../../AppContext'
import { MenuOutlined } from '@ant-design/icons'

import Text from '../../ui/Text'
import Icon from '../../ui/Icon'
import i18n from 'i18next'
import { MenuInterface, StyledMenuInterface } from './interfaces'
import classes from './MobileMenu.module.scss'
import { AuthContext } from '../../context/AuthContext'

const MenuItems = ({ arr, setVisible }: StyledMenuInterface) => {
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
    <div className={classes.mobile}>
      <ul>{res}</ul>
      <div className={classes.close}>
        <Icon
          icon={'close'}
          size={32}
          onClick={() => {
            setVisible(false)
          }}
        />
      </div>
    </div>
  )
}

export default () => {
  const user = useContext(AuthContext)
  const history = useHistory()
  const { setModalVisible } = useContext(AppContext)
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
    <div ref={ref}>
      <MenuOutlined
        style={{ fontSize: 24 }}
        onClick={() => {
          setMainMenuVisible(true)
        }}
      />
      {mainMenuVisible
        ? (
        <MenuItems arr={MainMenuList} visible={mainMenuVisible} setVisible={setMainMenuVisible} />
          )
        : null}
    </div>
  )
}
