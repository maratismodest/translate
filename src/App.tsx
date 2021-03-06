import React, { useState, useContext } from 'react'
import 'antd/dist/antd.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import i18n from 'i18next'
import { YMInitializer } from 'react-yandex-metrika'
import { getLangWords, getWordsFirstSecond, initialState } from './localBase/base'
import { translateBaseI18 } from './localBase/locale/translate'
import Welcome from './components/Welcome'
import Words from './components/Games/GuessWord'
import Result from './components/Result'
import Phrases from './components/Games/GuessPhrase'
import Collect from './components/Games/CollectPhrase'
import Menu from './components/Menu'
import classes from './App.module.scss'
import Latin from './components/Latin'
import AppContext from './context/AppContext'
import User from './components/User'
import Word from './components/Games/CollectWord'
import PickGame from './components/PickGame'
import ModalLogin from './components/Modals/ModalLogin'
import { AuthContext } from './context/AuthContext'
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
  const { word, phrases } = state
  const [modalLoginVisible, setModalVisible] = useState(false)

  const { data: wordsData } = useQuery(GET_ALL_WORDS)
  const { data: phrasesData } = useQuery(GET_ALL_PHRASES)

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

  function getWordsAndPhrases () {
    if (word.length === 0 && wordsData) {
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

      setState((prev : any) => ({ ...prev, word: words, words: wordsTatRus }))
      console.log('getWords')
    }

    if (phrases.length === 0 && phrasesData) {
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
      setState((prev: any) => ({ ...prev, phrases: phrasesTatRus, collect: phrases }))
      console.log('getPhrases')
    }
  }

  getWordsAndPhrases()

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
