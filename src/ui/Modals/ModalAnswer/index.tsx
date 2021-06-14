import Header from '../../Header'
import { Paragraph } from '../../Paragraph'
import { Modal } from 'antd'
import i18n from 'i18next'
import styled from 'styled-components'
import React from 'react'
import { Button } from '../../Button'
import Icon from '../../Icon'

interface ModalAnswerInterface {
  currentQuestionResult: any;
  handleNext: () => void;
}
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
`
export const ModalAnswer = ({
  currentQuestionResult,
  handleNext
}: ModalAnswerInterface) => {
  // console.log('currentQuestionResult', currentQuestionResult)
  const { correct, correctText, chosenText } = currentQuestionResult
  const True = () => {
    return (
      <div>
        <Header color="green" style={{ marginTop: 20 }}>
          Верно
        </Header>
        <Icon icon={correct} size={64} />
        <Paragraph bold>{chosenText}</Paragraph>
      </div>
    )
  }

  const False = () => {
    return (
      <div>
        <Header color="red">Неверно</Header>
        <Paragraph bold>{chosenText}</Paragraph>
        <Icon icon={correct} size={64} />
        <Header color="green" style={{ marginTop: 20 }}>
          Правильный ответ
        </Header>
        <Paragraph bold>{correctText}</Paragraph>
      </div>
    )
  }

  return (
    <Modal
      width={300}
      bodyStyle={{ height: 300 }}
      visible={true}
      footer={null}
      closable={false}
      centered
    >
      <ModalBody>
        {correct ? <True /> : <False />}

        <Button onClick={handleNext}>{i18n.t('next')}</Button>
      </ModalBody>
    </Modal>
  )
}
