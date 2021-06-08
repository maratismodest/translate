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
import { firestore } from './firebaseSetup'
import { Spin } from 'antd'
import { Language } from './localBase/interfaces'
import { words } from './localBase/words'

function App (props: any) {
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

  const ref = firestore.collection('words')
  const phrases = firestore.collection('phrases')

  function getWords () {
    setLoading(true)
    ref
      .onSnapshot((querySnapshot) => {
        const items: any = []
        querySnapshot.forEach((doc) => {
          items.push(doc.data())
        })

        const rusWords : string[] = getLangWords('rus')
        const tatWords: string[] = getLangWords('tat')
        const wordsTatRus = getWordsFirstSecond(
          Language.tat,
          Language.rus,
          tatWords,
          rusWords,
          words
        )
        setState({ ...initialState, word: items, words: wordsTatRus })
      })
    phrases
      .onSnapshot((querySnapshot) => {
        const phrases: any = []
        querySnapshot.forEach((doc) => {
          phrases.push(doc.data())
        })

        const rusWords : string[] = getLangWords('rus')
        const tatWords: string[] = getLangWords('tat')
        const phrasesTatRus = getWordsFirstSecond(
          Language.tat,
          Language.rus,
          tatWords,
          rusWords,
          phrases
        )

        setState(prev => ({ ...prev, collect: phrases, phrases: phrasesTatRus }))
      })

    setLoading(false)
  }

  useEffect(() => {
    getWords()
  }, [])

  if (loading) {
    return (
      <div className={classes.bodyCenter}>
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
          <Menu user={user} />
        </div>

        <div className={classes.main} id='page-wrap'>
          <Switch>
            <Route path={['/word', '/*/word']} render={() => <Word />} />
            <Route path={['/words', '/*/words']} render={() => <Words />} />
            <Route path={['/phrases', '/*/phrases']} render={() => <Phrases />} />
            <Route path={['/collect', '/*/collect']} render={() => <Collect />} />
            <Route path={['/result', '/*/result']} render={() => <Result {...props} />} />
            <Route path={['/about', '/*/about']} render={() => <h1>About</h1>} />
            <Route path={['/latin', '/*/latin']} render={() => <Latin />} />
            <Route path='/user' render={() => <User {...props} user={user} />} />
            <Route path='/pickgame' exact render={() => <PickGame />} />
            <Route path='/' exact render={() => <Welcome />} />
          </Switch>

          {user ? null : <ModalLogin {...props} />}
        </div>
        <YMInitializer accounts={[72761164]} options={{ webvisor: true }} version='2' />
      </div>
    </AppContext.Provider>
  )
}

export default App
