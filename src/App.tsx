import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import i18n from 'i18next'
import { YMInitializer } from 'react-yandex-metrika'
import { initialState } from './localBase/base'
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
import { Course } from './components/Course'

function App (props: any) {
  const [state, setState] = useState(initialState)
  const [modalLoginVisible, setModalVisible] = useState(false)
  i18n
    .init({
      resources: translateBaseI18,
      lng: state.language
    })
    .then()

  const context = {
    state,
    setState,
    modalLoginVisible,
    setModalVisible
  }

  return (
    <AppContext.Provider value={context}>
      <div className={classes.body} id="App">
        <div className={classes.header}>
          <NavLink to="/">
            <StyledLogo level={2} bold color="green">
              Chamala
            </StyledLogo>
          </NavLink>
          <Menu {...props} />
        </div>

        <div className={classes.main} id="page-wrap">
          <Switch>
            <Route path={['/word', '/*/word']} render={() => <Word />} />
            <Route path={['/words', '/*/words']} render={() => <Words />} />
            <Route path={['/phrases', '/*/phrases']} render={() => <Phrases />} />
            <Route path={['/collect', '/*/collect']} render={() => <Collect />} />
            <Route path={['/result', '/*/result']} render={() => <Result {...props} />} />
            <Route path={['/about', '/*/about']} render={() => <h1>About</h1>} />
            <Route path={['/latin', '/*/latin']} render={() => <Latin />} />
            <Route path="/user" render={() => <User {...props} />} />
            <Route path="/pickgame" exact render={() => <PickGame />} />
            <Route path="/" exact render={() => <Welcome />} />
            <Route path="/course" render={() => <Course />} />
          </Switch>

          {props.user ? null : <ModalLogin {...props} />}
        </div>
        <YMInitializer accounts={[72761164]} options={{ webvisor: true }} version="2" />
      </div>
    </AppContext.Provider>
  )
}

export default App
