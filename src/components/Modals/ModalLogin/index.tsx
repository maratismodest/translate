import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Modal } from 'antd'
import { LoginForm } from './components/LoginForm'
import { RegisterForm } from './components/RegisterForm'
import { ResetForm } from './components/ResetForm'
import AppContext from '../../../context/AppContext'
import { Header } from '../../../ui'
import { StyledBody } from 'App'

const ModalLogin = (props: any) => {
  const StyledLogin = styled(StyledBody)`
  color: #718ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
  const { user } = props
  const { modalLoginVisible, setModalVisible } =
    useContext(AppContext)

  const [show, setShow] = useState('login')

  useEffect(() => {
    if (user) {
      setModalVisible(false)
    }
  }, [user])

  return (
    <Modal
      visible={modalLoginVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      footer={null}
      width={480}
      centered
    >
      <StyledLogin>
        {show === 'login'
          ? (
          <LoginForm show={show} setShow={setShow} {...props} />
            )
          : null}
        {show === 'register'
          ? (
          <RegisterForm show={show} setShow={setShow} {...props} />
            )
          : null}
        {show === 'reset'
          ? (
          <ResetForm show={show} setShow={setShow} {...props} />
            )
          : null}
      </StyledLogin>
    </Modal>
  )
}
export default ModalLogin

export const StyledInput = styled(Input)`
  background: rgba(92, 92, 92, 0.05);
  border: 1px solid rgba(11, 65, 12, 0.2);
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;
`

export const StyledLoginFooter = styled.div`
  margin-top: 30px !important;
  @media (max-width: 1024px) {
    margin-top: 20px !important;
  }
`

export const LoginHeader = styled(Header)`
  margin-bottom: 80px !important;
  @media (max-width: 1024px) {
    margin-bottom: 30px !important;
  }
`
