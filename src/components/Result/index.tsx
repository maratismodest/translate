import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import axios from 'axios'
import AppContext from '../../AppContext'
import _ from 'lodash'
import { InitialStateInterface } from '../../localBase/base'
import { Header, Text, Icon, Button } from 'ui'
import { StyledBody } from '../../AppStyles'
import { AuthContext } from '../../context/AuthContext'
import classes from './Result.module.scss'

const Result = () => {
  const user = useContext(AuthContext)
  const { state, setState } = useContext(AppContext)
  const { result, chosenGame } = state

  const [db, setDb] = useState<any>(null)

  async function getInfo () {
    try {
      const res = await axios.get(
        'https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json'
      )
      return res
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async function addCount (id: string) {
    const rightAnswers = _.filter(result, { correct: true })
    const wrongAnswers = _.filter(result, { correct: false })
    try {
      const current = db[id]
      const updated = {
        ...current,
        count: current.count + 1,
        correct: current.correct + rightAnswers.length,
        mistake: current.mistake + wrongAnswers.length
      }
      const res = await axios.put(
        `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`,
        updated
      )
      return res
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInfo().then((res) => {
      setDb(res.data)
    })
  }, [])

  if (user) {
    addCount(user.uid).then((res) => {
      console.log('added Count')
    })
  }

  return (
    <StyledBody>
      <Header>{i18n.t('resultText')}:</Header>
      <ul>
        {result.map((item: any, index: number) => {
          const { correct, questionText, chosenText, correctText } = item
          console.log(item)
          return (
            <li className={classes.re} key={index}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Header level={3}>{questionText}: </Header>
                <Text large color={correct ? 'green' : 'red'}>
                  {chosenText}
                </Text>
                <Icon icon={correct} />
              </div>
              {correct ? null : <Text green>Правильный ответ: {correctText}</Text>}
            </li>
          )
        })}
      </ul>
      <div>
        <div style={{ marginBottom: 16 }}>
          <Header level={4}>{i18n.t('wellDone')}</Header>
        </div>
        <Link to={`/${chosenGame}`}>
          <Button
            onClick={() => {
              setState((prevState : InitialStateInterface) => ({
                ...prevState,
                result: [],
                finished: false,
                currentQuestionIndex: 0,
                initialQuestionIndex: 0
              }))
            }}
          >s
            {i18n.t('repeat')}
          </Button>
        </Link>
      </div>

      <Link
        to={'/'}
        onClick={() => {
          setState((prevState : InitialStateInterface) => ({
            ...prevState,
            gameState: 'welcome',
            result: [],
            finished: false,
            currentQuestionIndex: 0,
            initialQuestionIndex: 0
          }))
          // setSomeState(prev => ({...prev, count: prev.count + 1}));
        }}
      >
        <Text underline large>
          {i18n.t('mainPage')}
        </Text>
      </Link>
    </StyledBody>
  )
}
export default Result
