import React from 'react'
import Google from './google.svg'

interface GoogleButtonInterface {
  signInWithGoogle: () => void;
}
export const GoogleButton = ({ signInWithGoogle }: GoogleButtonInterface) => {
  return (
    <img
      src={Google}
      onClick={signInWithGoogle}
      width={46}
      style={{ cursor: 'pointer' }}
    />
  )
}
