import React, { useContext, useRef, useState } from 'react'
import Sounds from '../../../localBase/sounds'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import { OptionInterface } from '../../../localBase/interfaces'
import AppContext from '../../../context/AppContext'
import { isMobile } from 'react-device-detect'
import { ModalAnswer } from '../../../ui/Modals/ModalAnswer'
import i18n from 'i18next'
import { Button, Icon, Header, Slab, ProgressBlock } from 'ui'
import { StyledBody } from 'App'
import classes from './Words.module.scss'
import { Spin } from 'antd'

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

const OptionsList = ({ options, currentQuestionResult, handleOption }: any) => {
  const list = options.map((option: OptionInterface, index: number) => {
    const { id, text } = option
    if (isMobile) {
      return (
        <li key={index + text}>
          <Slab
            normal
            button
            onClick={(e: any) => {
              currentQuestionResult ? console.log('уже выбран вариант') : handleOption(id)
            }}
          >
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
    return <ul className={classes.ulMobile}>{list}</ul>
  }
  return <ul style={{ marginTop: 10 }}>{list}</ul>
}

export const GuessWord = () => {
  const history = useHistory()

  const { state, setState } = useContext(AppContext)
  const { words, chosenGame } = state
  if (!words || words.length === 0) {
    return (
      <div className='bodyCenter'><Spin /></div>
    )
  }

  const { firstLanguage, secondLanguage } = words
  const [answer, setAnswer] = useState<any>()

  const first = _.shuffle(firstLanguage).slice(0, 3)
  const second = _.shuffle(secondLanguage).slice(0, 3)
  const shuffle = _.shuffle([...first, ...second])
  const questions = useRef(shuffle)

  const { soundCorrect, soundWrong } = Sounds

  const [disabled, setDisabled] = useState(false)

  const [currentQuestionResult, setCurrentQuestionResult] = useState<CurrentQuestionResultInterface | any>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [result, setResult] = useState<Array<questionResultInterface>>([])

  const question = questions.current[currentQuestionIndex]
  const { options, questionText, correct, id: questionId, audio } = question

  const questionSound = new Audio(audio)
  const success = new Audio(soundCorrect)
  const mistake = new Audio(soundWrong)

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

    id === correct ? success.play() : mistake.play()

    const questionResultObject = {
      correct: id === correct,
      id: questionId,
      questionText,
      correctText,
      chosenText: text
    }

    setCurrentQuestionResult(questionResultObject)
  }

  const handleNext = () => {
    checkGameState(chosenGame, currentQuestionResult)
    setCurrentQuestionResult(null)
    setAnswer(undefined)
  }

  return (
    <StyledBody>
      <Slab
        onClick={(e: any) => {
          setDisabled(true)
          questionSound.play()
          e.target.blur()
          setDisabled(false)
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
    </StyledBody>
  )
}
