import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import AppContext from '../../AppContext'
import _ from 'lodash'
import { InitialStateInterface } from '../../localBase/base'
import { Header, Text, Icon, Button } from 'ui'
import { StyledBody } from '../../AppStyles'
import { AuthContext } from '../../context/AuthContext'
import classes from './Result.module.scss'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../query/user'
import { UPDATE_USER } from '../../mutations/user'

const Result = () => {
  const { state, setState } = useContext(AppContext)
  const { result, chosenGame } = state
  const user = useContext(AuthContext)

  const { loading, data } = useQuery(GET_ALL_USERS)
  const [updateUser] = useMutation(UPDATE_USER)

  if (!result) {
    return (
      <div>Ждем результатов</div>
    )
  }

  if (loading || !data) {
    return (
      <div>Смотрим базу данных пользователей</div>
    )
  }

  const users = data.getAllUsers
  console.log('users', users)

  function addCount (uid : string) {
    const rightAnswers = _.filter(result, { correct: true })
    const wrongAnswers = _.filter(result, { correct: false })
    const current = _.find(users, { uid: uid })
    const updated = {
      ...current,
      count: current.count + 1,
      correct: current.correct + rightAnswers.length,
      mistake: current.mistake + wrongAnswers.length
    }

    console.log('updated', updated)
    updateUser({
      variables: {
        input: {
          uid, updated
        }
      }
    }).then(({ data }: any) => {
      console.log('data', data)
    })
  }

  if (user) {
    addCount(user.uid)
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
          >
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
