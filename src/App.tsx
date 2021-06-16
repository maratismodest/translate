import React, { useState, useContext, useEffect } from 'react'
import 'antd/dist/antd.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import i18n from 'i18next'
import { YMInitializer } from 'react-yandex-metrika'
import { getLangWords, getWordsFirstSecond, initialState } from './localBase/base'
import { translateBaseI18 } from './localBase/locale/translate'
import Welcome from './components/Welcome'
import Words from './components/Words'
import Result from './components/Result'
import Phrases from './components/Phrases'
import Collect from './components/Collect'
import Menu from './components/Menu'
import classes from './App.module.scss'
import Latin from './components/Latin'
import AppContext from './context/AppContext'
import User from './components/User'
import Word from './components/Word'
import PickGame from './components/PickGame'
import ModalLogin from './components/Modals/ModalLogin'
import { AuthContext } from './context/AuthContext'
import { Spin } from 'antd'
import { Language } from './localBase/interfaces'
import { useQuery } from '@apollo/client'
import { GET_ALL_WORDS } from './graphql/query/word'
import { GET_ALL_PHRASES } from './graphql/query/phrase'
import { Header } from 'ui'
import styled from 'styled-components'

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  text-align: center;
`

function App () {
  const [state, setState] = useState(initialState)
  const [modalLoginVisible, setModalVisible] = useState(false)

  const { loading: wordsLoading, data: wordsData } = useQuery(GET_ALL_WORDS)
  const { loading: phrasesLoading, data: phrasesData } = useQuery(GET_ALL_PHRASES)

  i18n
    .init({
      resources: translateBaseI18,
      lng: state.language
    })
    .then()
  const user = useContext(AuthContext)
  const context = {
    state,
    setState,
    modalLoginVisible,
    setModalVisible
  }

  useEffect(() => {
    if (wordsData) {
      const words = wordsData.getAllWords

      const rusWords : string[] = getLangWords(words, 'rus')
      const tatWords: string[] = getLangWords(words, 'tat')
      const wordsTatRus = getWordsFirstSecond(
        Language.tat,
        Language.rus,
        tatWords,
        rusWords,
        words
      )
      setState(prev => ({ ...prev, word: words, words: wordsTatRus }))
    }
  }, [wordsData])
  useEffect(() => {
    if (phrasesData) {
      const phrases = phrasesData.getAllPhrases
      const rusPhrases : string[] = getLangWords(phrases, 'rus')
      const tatPhrases: string[] = getLangWords(phrases, 'tat')
      const phrasesTatRus = getWordsFirstSecond(
        Language.tat,
        Language.rus,
        tatPhrases,
        rusPhrases,
        phrases
      )
      setState(prev => ({ ...prev, phrases: phrasesTatRus, collect: phrases }))
    }
  }, [phrasesData])

  if (wordsLoading || !wordsData || phrasesLoading || !phrasesData) {
    return (<div className={classes.bodyCenter}>
        <Spin />
      </div>
    )
  }

  // console.log(state)

  return (
    <AppContext.Provider value={context}>
      <div className={classes.body} id='App'>
        <div className={classes.header}>
          <NavLink to='/'>
            <Header level={2} bold color='green' className={classes.logo}>
              Chamala
            </Header>
          </NavLink>
          <Menu />
        </div>

        <div className={classes.main} id='page-wrap'>
          <Switch>
            <Route path={['/word', '/*/word']} render={() => <Word />} />
            <Route path={['/words', '/*/words']} render={() => <Words />} />
            <Route path={['/phrases', '/*/phrases']} render={() => <Phrases />} />
            <Route path={['/collect', '/*/collect']} render={() => <Collect />} />
            <Route path={['/result', '/*/result']} render={() => <Result />} />
            <Route path={['/about', '/*/about']} render={() => <h1>About</h1>} />
            <Route path={['/latin', '/*/latin']} render={() => <Latin />} />
            <Route path='/user' render={() => <User />} />
            <Route path='/pickgame' exact render={() => <PickGame />} />
            <Route path='/' exact render={() => <Welcome />} />
          </Switch>

          {user ? null : <ModalLogin />}
        </div>
        <YMInitializer accounts={[72761164]} options={{ webvisor: true }} version='2' />
      </div>
    </AppContext.Provider>
  )
}

export default App
