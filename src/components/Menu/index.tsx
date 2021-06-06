import React, { useContext } from 'react'
import { isMobile } from 'react-device-detect'
import MobileMenu from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { AuthContext } from '../../context/AuthContext'

export const Menu = (props: any) => {
  const user = useContext(AuthContext)

  return isMobile
    ? (
    <MobileMenu user={user} />
      )
    : (
    <DesktopMenu user={user} />
      )
}

export default Menu
