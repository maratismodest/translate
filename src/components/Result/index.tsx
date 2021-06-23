import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import AppContext from '../../context/AppContext'
import _ from 'lodash'
import { InitialStateInterface } from '../../localBase/interfaces'
import { Header, Text, Icon, Button } from 'ui'
import { StyledBody } from 'App'
import { AuthContext } from '../../context/AuthContext'
import classes from './Result.module.scss'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../graphql/query/user'
import { UPDATE_USER } from '../../graphql/mutations/user'

const Result = () => {
  const { state, setState } = useContext(AppContext)
  const { result, chosenGame } = state
  const user = useContext(AuthContext)

  const { data } = useQuery(GET_ALL_USERS)
  const [updateUser] = useMutation(UPDATE_USER)

  function addCount (uid : string) {
    const users = data.getAllUsers
    const rightAnswers = _.filter(result, { correct: true })
    const wrongAnswers = _.filter(result, { correct: false })
    const current = _.find(users, { uid: uid })
    if (current && user) {
      const updated = {
        id: current.id,
        uid: current.uid,
        avatar: current.avatar,
        count: current.count + 1,
        correct: current.correct + rightAnswers.length,
        mistake: current.mistake + wrongAnswers.length
      }
      // console.log('updated', updated)
      updateUser({
        variables: {
          input: updated
        }
      }).then(() => {
        // console.log('data')
      })
    }
  }

  return (
    <StyledBody>
      <Header>{i18n.t('resultText')}:</Header>
      <ul>
        {result.map((item: any, index: number) => {
          const { correct, questionText, chosenText, correctText } = item
          return (
            <li className={classes.result} key={index}>
              <div className={classes.header}
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
              user ? addCount(user.uid) : console.log('test')
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
          user ? addCount(user.uid) : console.log('test')
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
