import React from 'react'
import Google from './google.svg'
import { signInWithGoogle } from '../../../../../firebaseSetup'

export const GoogleButton = () => {
  return (
    <img
      src={Google}
      onClick={signInWithGoogle}
      width={46}
      style={{ cursor: 'pointer' }}
    />
  )
}
