import React, { useContext, useRef, useState } from 'react'
import useSound from 'use-sound'
import Sounds from '../../localBase/sounds'
import Slab from '../../ui/Slab'
import Header from '../../ui/Header'
import ProgressBlock from '../../ui/ProgressBlock'

import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import { OptionInterface } from '../../localBase/interfaces'
import AppContext from '../../AppContext'
import Icon from '../../ui/Icon'
import styled from 'styled-components'
import { StyledBody } from '../Welcome/WelcomeStyles'
import { isMobile } from 'react-device-detect'
import { ModalAnswer } from '../../ui/Modals/ModalAnswer'
import i18n from 'i18next'
import { Button } from '../../ui/Button'

export interface questionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
}

interface CurrentQuestionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
  chosenText: string;
}

const StyledWords = styled(StyledBody)`
  //& .colors {
  //  margin-bottom: 20px;
  //  background: red !important;
  //}
`

const MobileUl = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: fit-content;
    margin-bottom: 20px;
  }
`

const OptionsList = ({ options, currentQuestionResult, handleOption }: any) => {
  const list = options.map((option: OptionInterface, index: number) => {
    const { id, text } = option
    if (isMobile) {
      return (
        <li
          key={index + text}
          onClick={(e: any) => {
            console.log(e)
            currentQuestionResult ? console.log('уже выбран вариант') : handleOption(id)
          }}
        >
          <Slab normal button>
            {text}
          </Slab>
        </li>
      )
    }
    return (
      <li key={index + text} style={{ marginBottom: 10 }}>
        <Button
          normal
          onClick={(e: any) => {
            currentQuestionResult ? console.log('уже выбран вариант') : handleOption(id)
          }}
        >
          {text}
        </Button>
      </li>
    )
  })
  if (isMobile) {
    return <MobileUl>{list}</MobileUl>
  }
  return <ul style={{ marginTop: 10 }}>{list}</ul>
}

const Words = () => {
  const history = useHistory()

  const { state, setState } = useContext(AppContext)
  const { phrases, chosenGame } = state
  console.log('chosenGame', chosenGame)
  const { firstLanguage, secondLanguage } = phrases
  const [answer, setAnswer] = useState<any>()

  const first = _.shuffle(firstLanguage).slice(0, 3)
  const second = _.shuffle(secondLanguage).slice(0, 3)
  const shuffle = _.shuffle([...first, ...second])
  const questions = useRef(shuffle)

  const { soundCorrect, soundWrong } = Sounds
  const [success] = useSound(soundCorrect)
  const [mistake] = useSound(soundWrong)

  const [disabled, setDisabled] = useState(false)

  const [currentQuestionResult, setCurrentQuestionResult] = useState<CurrentQuestionResultInterface | any>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [result, setResult] = useState<Array<questionResultInterface>>([])

  const question = questions.current[currentQuestionIndex]
  const { options, questionText, correct, id: questionId, audio } = question
  const [tell, { duration }] = useSound(audio)

  function checkGameState (chosenGame: string, questionResult: questionResultInterface) {
    if (currentQuestionIndex + 1 < questions.current.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setResult((prevState) => [...prevState, questionResult])
    } else {
      history.push('/result')
      setState({
        ...state,
        result: [...result, questionResult],
        chosenGame: 'words'
      })
    }
  }

  const handleOption = (id: number) => {
    const currentOption = _.find(options, { id: id })
    setAnswer(currentOption)
  }

  const handleCheck = () => {
    const correctText = _.find(options, { id: 1 }).text
    const { id, text } = answer

    id === correct ? success() : mistake()

    const questionResultObject = {
      correct: id === correct,
      id: questionId,
      questionText,
      correctText,
      chosenText: text
    }

    setCurrentQuestionResult(questionResultObject)
  }

  const timer = Math.floor(duration || 1000)

  const delayFunc = (e: any) => {
    setDisabled(true)
    tell()
    setTimeout(() => {
      setDisabled(false)
    }, timer)
  }

  const handleNext = () => {
    checkGameState(chosenGame, currentQuestionResult)
    setCurrentQuestionResult(null)
    setAnswer(undefined)
  }

  return (
    <StyledWords>
      <Slab
        onClick={(e: any) => {
          delayFunc(e)
          e.target.blur()
        }}
        style={{
          pointerEvents: disabled ? 'none' : 'auto'
        }}
        big
      >
        <Header level={2}>{state.firstLanguage === 'lat' ? 'Qabat' : questionText}</Header>

        <Icon icon="play" size={24} className={'play'} />
      </Slab>

      <OptionsList options={options} currentQuestionResult={currentQuestionResult} handleOption={handleOption} />

      {currentQuestionResult
        ? (
        <>
          <ModalAnswer currentQuestionResult={currentQuestionResult} handleNext={handleNext} />
          <Button onClick={handleCheck} disabled={!answer}>
            {i18n.t('check')}
          </Button>
        </>
          )
        : (
        // <Button onClick={handleNext}>{i18n.t("next")}</Button>
        <Button onClick={handleCheck} disabled={!answer}>
          {i18n.t('check')}
        </Button>
          )}
      <ProgressBlock length={questions.current.length} currentQuestionIndex={currentQuestionIndex} />
    </StyledWords>
  )
}

export default Words
