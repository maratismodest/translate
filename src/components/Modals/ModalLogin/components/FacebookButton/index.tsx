import React from 'react'
import Facebook from './facebook.svg'
import { signInWithFacebook } from '../../../../../firebaseSetup'

export const FacebookButton = () => {
  return (
    <img
      src={Facebook}
      onClick={signInWithFacebook}
      width={46}
      style={{ cursor: 'pointer' }}
    />
  )
}
