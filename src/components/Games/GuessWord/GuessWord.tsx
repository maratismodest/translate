import React, { useContext, useState } from 'react'
import Sounds from 'localBase/sounds'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import AppContext from 'context/AppContext'
import { isDesktop, isMobile } from 'react-device-detect'
import { ModalAnswer } from 'ui/Modals/ModalAnswer'
import i18n from 'i18next'
import { Button, Icon, Header, Slab, ProgressBlock } from 'ui'
import { StyledBody } from 'App'
import classes from './../Words.module.scss'
import cn from 'classnames'
import { Spin } from 'antd'

interface questionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
  chosenText: string;
}

interface CurrentQuestionResultInterface {
  correct: boolean;
  id: number;
  questionText: string;
  correctText: string;
  chosenText: string;
}

interface AnswerInterface {
  id: number
  text: string
}

interface OptionsInterface {
  id: number
  text: string
}

interface OptionsListInterface {
  options:OptionsInterface[]
  handleOption: (arg0: number)=> void
}
const OptionsList = ({ options, handleOption }: OptionsListInterface) => {
  const list = options.map((option) => {
    const { id, text } = option
    if (isMobile) {
      return (
        <li key={text}>
          <Slab
            normal
            button
            onClick={() => handleOption(id)}
          >
            {text}
          </Slab>
        </li>
      )
    }
    return (
      <li key={text} className='mb-10'>
        <Button
          normal
          onClick={() => handleOption(id)}
        >
          {text}
        </Button>
      </li>
    )
  })

  return <ul className={cn({
    [classes.ul]: isDesktop,
    [classes.ulMobile]: isMobile
  })}>{list}</ul>
}

export const GuessWord = () => {
  const history = useHistory()

  const { state, setState } = useContext(AppContext)
  const { words } = state
  if (!words || words.length === 0) {
    return (
      <div className='bodyCenter'>
        <Spin />
      </div>
    )
  }

  const { firstLanguage, secondLanguage } = words

  const [questions] = useState(() => {
    const first = _.shuffle(firstLanguage).slice(0, 3)
    const second = _.shuffle(secondLanguage).slice(0, 3)
    return [...first, ...second]
  })
  const [currentQuestionResult, setCurrentQuestionResult] = useState<CurrentQuestionResultInterface | any>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [result, setResult] = useState<Array<questionResultInterface>>([])

  const [answer, setAnswer] = useState<AnswerInterface | null>(null)

  const question = questions[currentQuestionIndex]
  const { options, questionText, id: questionId, audio } = question

  // correctId is always = 1!
  const { soundCorrect, soundWrong } = Sounds
  const questionSound = new Audio(audio)
  const success = new Audio(soundCorrect)
  const mistake = new Audio(soundWrong)

  // function checkGameState () {
  //   if (currentQuestionIndex + 1 < questions.length) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1)
  //     setCurrentQuestionResult(null)
  //   } else {
  //     setState((prev: any) => ({ ...prev, result: result }))
  //     history.push('/result')
  //   }
  // }

  const handleOption = (id: number) => {
    const currentOption = _.find(options, { id: id })
    setAnswer(currentOption)
  }

  const handleCheck = () => {
    if (!answer) {
      return console.log('No chosen answer')
    }
    const correctText = _.find(options, { id: 1 }).text
    const { id, text } = answer

    id === 1 ? success.play() : mistake.play()

    const questionResult: questionResultInterface = {
      correct: id === 1,
      id: questionId,
      questionText,
      correctText,
      chosenText: text
    }
    setAnswer(null)
    setCurrentQuestionResult(questionResult)
  }

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setResult((prev) => [...prev, currentQuestionResult])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentQuestionResult(null)
    } else {
      setState((prev: any) => ({ ...prev, result: [...result, currentQuestionResult] }))
      history.push('/result')
    }
  }

  return (
    <StyledBody>
      <Slab
        onClick={(e: any) => {
          questionSound.play()
          e.target.blur()
        }}
        style={{
          pointerEvents: currentQuestionResult ? 'none' : 'auto'
        }}
        big
      >
        <Header level={2}>{state.firstLanguage === 'lat' ? 'Qabat' : questionText}</Header>

        <Icon icon="play" size={24} className={'play'} />
      </Slab>

      <OptionsList options={options} handleOption={handleOption} />

      {currentQuestionResult && (
          <ModalAnswer currentQuestionResult={currentQuestionResult} handleNext={handleNext} />
      )}
      <Button onClick={handleCheck} disabled={!answer}>
        {i18n.t('check')}
      </Button>
      <ProgressBlock length={questions.length} currentQuestionIndex={currentQuestionIndex} />
    </StyledBody>
  )
}
