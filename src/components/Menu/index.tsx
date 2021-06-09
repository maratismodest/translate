import React from 'react'
import { isMobile } from 'react-device-detect'
import MobileMenu from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'

export const Menu = () => {
  return isMobile
    ? (
    <MobileMenu />
      )
    : (
    <DesktopMenu />
      )
}

export default Menu
