import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import axios from 'axios'
import AppContext from '../../AppContext'

import _ from 'lodash'
import { initialState } from '../../localBase/base'
import Header from '../../ui/Header'
import Text from '../../ui/Text'
import Icon from '../../ui/Icon'
import { Button } from '../../ui/Button'
import { StyledBody } from '../../AppStyles'
import firebase from 'firebase'
import { AuthContext } from '../../context/AuthContext'

const StyledResult = styled(StyledBody)`
  width: 100%;
`

const ResultLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 10px;
`

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

  function addCount (id: string) {
    const rightAnswers = _.filter(result, { correct: true })
    const wrongAnswers = _.filter(result, { correct: false })
    const current = db[id]
    const updated = {
      ...current,
      count: current.count + 1,
      correct: current.correct + rightAnswers.length,
      mistake: current.mistake + wrongAnswers.length
    }
    console.log('updated', updated)
    firebase.database().ref('base/users/' + id).set(updated).then(r => {
      console.log('r', r)
    })
  }

  useEffect(() => {
    getInfo().then((res) => {
      setDb(res.data)
    })
  }, [])

  if (user) {
    addCount(user.uid)
  }

  console.log('chosenGame', chosenGame)

  return (
    <StyledResult>
      <Header>{i18n.t('resultText')}:</Header>
      <ul>
        {result.map((item: any, index: number) => {
          const { correct, questionText, chosenText, correctText } = item
          console.log(item)
          return (
            <ResultLi key={index}>
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
            </ResultLi>
          )
        })}
      </ul>
      <div>
        <div style={{ marginBottom: 16 }}>
          <Header level={4}>{i18n.t('wellDone')}</Header>
          {/* <div> */}
          {/*  {!user ? ( */}
          {/*    <div style={{ textAlign: "center" }}> */}
          {/*      <div>Зайди в личный кабинет, чтобы знать свой прогресс! </div> */}
          {/*      <GoogleButton onClick={signInWithGoogle} label="Чамала!" /> */}
          {/*    </div> */}
          {/*  ) : null} */}
          {/* </div> */}
        </div>
        <Link to={`/${chosenGame}`}>
          <Button
            onClick={() => {
              setState(initialState)
            }}
          >
            {i18n.t('repeat')}
          </Button>
        </Link>
      </div>

      <Link
        to={'/'}
        onClick={() => {
          setState({
            ...initialState,
            gameState: 'welcome'
          })
        }}
      >
        <Text underline large>
          {i18n.t('mainPage')}
        </Text>
      </Link>
    </StyledResult>
  )
}
export default Result
