import React, { useState } from 'react'
import i18n from 'i18next'
import { isMobile } from 'react-device-detect'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '../../../../ui/Button'
import { Text } from '../../../../ui/Text'
import { Span } from '../../../../ui/Span'
import { Paragraph } from '../../../../ui/Paragraph'
import { LoginHeader, StyledInput, StyledLoginFooter } from '../index'
import { GoogleButton } from './GoogleButton'
// import { FacebookButton } from './FacebookButton'
import { auth } from '../../../../firebase/firebaseSetup'

export const LoginForm = ({ setShow }: any) => {
  type FormValues = {
    email: string;
    password: string;
  };

  const schema = yup.object().shape({
    email: yup.string().email('Укажите Email').required('Укажите Email'),
    password: yup.string().required('Укажите Пароль')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })

  const [error, setError] = useState('')

  const handleLoginForm = async (data: FormValues) => {
    const { email, password } = data
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      // console.log('user', user)
      return user
    } catch (error) {
      setError('Ошибка авторизации')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <LoginHeader color={'green'}>{i18n.t('login')}</LoginHeader>

        <StyledInput {...register('email')} placeholder={i18n.t('login')} />
        <p>{errors.email?.message}</p>
        <StyledInput placeholder={i18n.t('password')} {...register('password')} />
        <p>{errors.password?.message}</p>
        <Text
          pointer
          bold
          style={{
            marginBottom: isMobile ? 10 : 20,
            marginTop: isMobile ? 10 : 20,
            maxWidth: 300,
            textAlign: 'right'
          }}
          onClick={() => {
            setShow('reset')
          }}
        >
          {i18n.t('forgotPassword')}
        </Text>
        <Text large color={'red'} style={{ marginBottom: isMobile ? 10 : 30 }}>
          {error}
        </Text>

        <Button htmlType="submit">{i18n.t('login')}</Button>
      </form>
      <StyledLoginFooter>
        <Span bold pointer style={{ marginBottom: isMobile ? 10 : 30, display: 'flex' }}>
          или войти с помощью:
        </Span>
          {/* <FacebookButton /> */}
        <GoogleButton />
      </StyledLoginFooter>
      <Paragraph
        style={{ margin: isMobile ? '20px 0' : '30px 0' }}
        onClick={() => {
          setShow('register')
        }}
      >
        Нет аккаунта?{' '}
        <Span pointer bold>
          Зарегистрироваться
        </Span>
      </Paragraph>
    </>
  )
}
