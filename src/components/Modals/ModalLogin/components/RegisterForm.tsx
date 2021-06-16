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
import { auth } from '../../../../firebase/firebaseSetup'
import { GoogleButton } from './GoogleButton'

export const RegisterForm = ({ setShow }: any) => {
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

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data
    try {
      return await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
      setError('Ошибка при создании учетной записи, перепроверьте данные')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginHeader color={'green'}>Регистрация</LoginHeader>
        <StyledInput {...register('email')} placeholder={i18n.t('login')} />
        <p>{errors.email?.message}</p>
        <StyledInput
          placeholder={i18n.t('password')}
          {...register('password')}
        />
        <p>{errors.password?.message}</p>

        <Text large color={'red'} style={{ marginBottom: 10 }}>
          {error}
        </Text>
        <Button htmlType="submit">Зарегистрироваться</Button>
      </form>
      <StyledLoginFooter>
        <Text style={{ marginBottom: isMobile ? 10 : 30 }}>
          или войти с помощью:
        </Text>
        <GoogleButton />
      </StyledLoginFooter>
      <Paragraph
        style={{ margin: isMobile ? '20px 0' : '30px 0' }}
        onClick={() => {
          setShow('login')
          setError('')
        }}
      >
        Есть аккаунт?{' '}
        <Span bold pointer>
          Войти
        </Span>
      </Paragraph>
    </>
  )
}
