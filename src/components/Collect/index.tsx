import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import i18n from 'i18next'
import AppContext from '../../context/AppContext'
import Sounds from '../../localBase/sounds'
import useSound from 'use-sound'
import { Icon, Text, Header, Tag, ProgressBlock, Button } from 'ui'
import { ModalAnswer } from 'ui/Modals/ModalAnswer'
import { StyledBody } from 'App'
import classes from './../Word/Word.module.scss'
import cn from 'classnames'
import { Spin } from 'antd'

interface QuestionResultInterface {
  correct: boolean;
  questionText: string;
  chosenText: string;
  correctText: string;
}

const Collect = () => {
  const history = useHistory()
  const { state, setState } = useContext(AppContext)
  const { collect, firstLanguage, chosenGame } = state
  if (!collect || collect.length === 0) {
    // console.log('0')
    return (
      <Spin />
    )
  }

  const { soundCorrect, soundWrong } = Sounds
  const [yes] = useSound(soundCorrect)
  const [no] = useSound(soundWrong)
  const [disabled, setDisabled] = useState(false)
  const [questionResult, setQuestionResult] = useState<any>()
  // console.log('chosenGame', chosenGame)

  const shuffle = _.shuffle(collect).slice(0, 5)
  const collectClone = _.clone(collect)

  const [questions] = useState(shuffle)

  const [result, setResult] = useState<Array<any>>([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const question = questions[currentQuestionIndex]
  const { tat, audio } = question

  // удалить из клона массива фраз именно нашу фразу
  const firstIndex = _.indexOf(collectClone, question)
  collectClone.splice(firstIndex, 1)

  const questionSeparated = question[firstLanguage].split(' ')
  const randomseparated = _.sample(collectClone)[firstLanguage].split(' ')

  const secondIndex = _.indexOf(collectClone, randomseparated)
  collectClone.splice(secondIndex, 1)
  const randomseparated2 = _.sample(collectClone)[firstLanguage].split(' ')

  const [separated, setSeparated] = useState<any>([])
  const [answer, setAnswer] = useState<Array<any>>([])

  const [tell, { duration }] = useSound(audio)
  const timer = Math.floor(duration || 1000)

  useEffect(() => {
    const wordsWithKeys = _.shuffle(
      questionSeparated.concat(randomseparated, randomseparated2)
    ).map((word: string, index: number) => {
      return {
        text: word,
        key: index
      }
    })
    setSeparated(wordsWithKeys)
    setAnswer([])
  }, [currentQuestionIndex])

  useEffect(() => {
    setTimeout(tell, 1000)
  }, [tell])

  // Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
  function checkGameState (
    chosenGame: string,
    questionResult: QuestionResultInterface
  ) {
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
    const final = temp.join(' ')
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
    // console.log(currentIndex)
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
      <li
        key={key}
        className={cn(classes.option, {
          cover: _.find(answer, item),
          important: _.find(answer, item)
        })}
      >
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
        <ModalAnswer
          currentQuestionResult={questionResult}
          handleNext={handleNext}
        />
          )
        : (
        <Button
          onClick={handleAnswerClick}
          disabled={!(answer.length > 0)}
        >
          {i18n.t('check')}
        </Button>
          )}

      <ProgressBlock
        length={questions.length}
        currentQuestionIndex={currentQuestionIndex}
      />
    </StyledBody>
  )
}
export default Collect
