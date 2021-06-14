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
import { StyledLogo } from './AppStyles'
import classes from './App.module.scss'
import Latin from './components/Latin'
import AppContext from './AppContext'
import User from './components/User'
import Word from './components/Word'
import PickGame from './components/PickGame'
import ModalLogin from './components/Modals/ModalLogin'
import { AuthContext } from './context/AuthContext'
import { Spin } from 'antd'
import { getHerokuPhrases, getHerokuWords } from './api'
import { Language } from './localBase/interfaces'

function App () {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [modalLoginVisible, setModalVisible] = useState(false)

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
    setLoading(true)
    getHerokuWords().then((words) => {
      const rusWords : string[] = getLangWords('rus')
      const tatWords: string[] = getLangWords('tat')
      const wordsTatRus = getWordsFirstSecond(
        Language.tat,
        Language.rus,
        tatWords,
        rusWords,
        words
      )
      setState(prev => ({ ...prev, word: words, words: wordsTatRus }))
    })
    getHerokuPhrases().then((phrases) => {
      const rusPhrases : string[] = getLangWords('rus')
      const tatPhrases: string[] = getLangWords('tat')
      const phrasesTatRus = getWordsFirstSecond(
        Language.tat,
        Language.rus,
        tatPhrases,
        rusPhrases,
        phrases
      )
      setState(prev => ({ ...prev, phrases: phrasesTatRus, collect: phrases }))
    })
    setLoading(false)
  }

  useEffect(() => {
    getWordsAndPhrases()
  }, [])

  if (loading) {
    return (<div className={classes.bodyCenter}>
        <Spin />
      </div>
    )
  }

  return (
    <AppContext.Provider value={context}>
      <div className={classes.body} id='App'>
        <div className={classes.header}>
          <NavLink to='/'>
            <StyledLogo level={2} bold color='green'>
              Chamala
            </StyledLogo>
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
