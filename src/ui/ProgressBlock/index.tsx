import styled from 'styled-components'
import { Progress } from 'antd'
import Text from '../Text'
import i18n from 'i18next'
import React from 'react'

const StyledProgressBlock = styled.div`
  width: 100%;
  text-align: left;
`

interface ProgressBlockInterface {
  currentQuestionIndex: number;
  length: number;
}
export const ProgressBlock = ({
  currentQuestionIndex,
  length
}: ProgressBlockInterface) => {
  return (
    <StyledProgressBlock>
      <Progress
        percent={((currentQuestionIndex + 1) * 100) / length}
        showInfo={false}
        strokeColor={'#0F8012'}
      />
      <Text green>
        {i18n.t('question')} {currentQuestionIndex + 1} / {length}
      </Text>
    </StyledProgressBlock>
  )
}

export default ProgressBlock
