import { useHistory } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context/AppContext'
import { Spin } from 'antd'
import Sounds from '../../../localBase/sounds'
import useSound from 'use-sound'
import _ from 'lodash'
import classes from '../Collect.module.scss'
import { Tag } from '../../../ui/Tag'
import { StyledBody } from '../../../App'
import i18n from 'i18next'
import { ModalAnswer } from '../../../ui/Modals/ModalAnswer'
import { Icon, Header, Button, ProgressBlock, Text } from '../../../ui'

interface QuestionResultInterface {
  correct: boolean;
  questionText: string;
  chosenText: string;
  correctText: string;
}

export const CollectWord = () => {
  const history = useHistory()
  const { state, setState } = useContext(AppContext)
  const { chosenGame, firstLanguage, word } = state

  if (!word || word.length === 0) {
    // console.log('0')
    return (
      <div className='bodyCenter'><Spin /></div>

    )
  }

  const { soundCorrect, soundWrong } = Sounds
  const [yes] = useSound(soundCorrect)
  const [no] = useSound(soundWrong)
  const [disabled, setDisabled] = useState(false)
  const [questionResult, setQuestionResult] = useState<any>()

  const shuffle = _.shuffle(word).slice(0, 5)
  const collectClone = _.clone(word)

  const [questions] = useState(shuffle)

  const [result, setResult] = useState<Array<any>>([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const question = questions[currentQuestionIndex]
  const { tat, audio } = question

  // удалить из клона массива фраз именно нашу фразу
  const firstIndex = _.indexOf(collectClone, question)
  collectClone.splice(firstIndex, 1)

  const questionSeparated = question[firstLanguage].toLowerCase().split('')

  const [separated, setSeparated] = useState<any>([])
  const [answer, setAnswer] = useState<Array<any>>([])
  const [tell, { duration }] = useSound(audio)
  const timer = Math.floor(duration || 1000)

  useEffect(() => {
    const wordsWithKeys = _.shuffle(questionSeparated).map((word: string, index: number) => {
      return {
        text: word,
        key: index
      }
    })
    setSeparated(wordsWithKeys)
    setAnswer([])
  }, [currentQuestionIndex])

  useEffect(() => {
    tell()
  }, [tell])

  // Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
  function checkGameState (chosenGame: string, questionResult: QuestionResultInterface) {
    if (currentQuestionIndex + 1 < questions.length) {
      setResult((prevState) => [...prevState, questionResult])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      history.push('/result')
      setState({
        ...state,
        currentQuestionIndex: 0,
        result: [...result, questionResult],
        finished: true,
        gameState: 'result',
        chosenGame: chosenGame
      })
    }
    setQuestionResult('')
  }

  const handleAnswerClick = () => {
    const temp = answer.map((item: any) => {
      return item.text
    })
    const final = _.capitalize(temp.join(''))
    question[firstLanguage] === final ? yes() : no()

    const questionResult: QuestionResultInterface =
      question[firstLanguage] === final
        ? {
            correct: true,
            questionText: tat,
            chosenText: final,
            correctText: question[firstLanguage]
          }
        : {
            correct: false,
            questionText: tat,
            chosenText: final,
            correctText: question[firstLanguage]
          }
    setQuestionResult(questionResult)
  }

  const handleTagClick = (key: number) => {
    const currentIndex = _.findIndex(answer, { key: key })
    const copyAnswer = _.clone(answer)
    copyAnswer.splice(currentIndex, 1)
    setAnswer(copyAnswer)
  }

  const handleClick = (key: number) => {
    if (_.find(answer, { key: key })) {
      // console.log('уже есть')
      return
    }
    const currentWord = _.find(separated, { key: key })
    setAnswer((prevState) => [...prevState, currentWord])
  }

  const resultList = answer.map((item, index) => {
    const { text, key } = item
    return (
      <li className={classes.answer} key={key}>
        <Tag
          green
          onClick={() => {
            handleTagClick(key)
          }}
        >
          <Text>{text}</Text>
        </Tag>
      </li>
    )
  })

  const separatedList = separated.map((item: any, index: number) => {
    const { text, key } = item
    return (
      <li key={key} className={_.find(answer, item) ? 'cover important' : ''}>
        <Tag
          onClick={(e: any) => {
            handleClick(key)
          }}
        >
          <Text>{text}</Text>
        </Tag>
      </li>
    )
  })

  const delayFunc = () => {
    setDisabled(true)
    tell()
    setTimeout(() => {
      setDisabled(false)
    }, timer)
  }

  useEffect(() => {
    setTimeout(tell, 1000)
  }, [tell])

  const handleNext = () => {
    checkGameState(chosenGame, questionResult)
  }

  return (
    <StyledBody>
      <div className={classes.repeat}
           onClick={delayFunc}
           style={{
             pointerEvents: disabled ? 'none' : 'auto'
           }}
      >
        <div className={classes.circle}>
          <Icon icon={'play'} size={16} />
        </div>
        <Header>{i18n.t('repeatAudio')}</Header>
      </div>
      <div className={classes.body}>
        <ul className={classes.result}>{resultList}</ul>

        <ul className={classes.options}>{separatedList}</ul>
      </div>

      {questionResult
        ? (
          <ModalAnswer currentQuestionResult={questionResult} handleNext={handleNext} />
          )
        : (
          <Button onClick={handleAnswerClick} disabled={!(answer.length > 0)}>
            {i18n.t('check')}
          </Button>
          )}

      <ProgressBlock length={questions.length} currentQuestionIndex={currentQuestionIndex} />
    </StyledBody>
  )
}
