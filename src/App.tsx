import React, { useState, useContext, useEffect } from 'react'
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
import { Language, WordsInterface } from './localBase/interfaces'
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

  function setWordsAndPhrases (words: WordsInterface[], phrases: WordsInterface[]) {
    const rusWords: string[] = getLangWords(words, 'rus')
    const tatWords: string[] = getLangWords(words, 'tat')
    const wordsTatRus = getWordsFirstSecond(
      Language.tat,
      Language.rus,
      tatWords,
      rusWords,
      words
    )
    const rusPhrases: string[] = getLangWords(phrases, 'rus')
    const tatPhrases: string[] = getLangWords(phrases, 'tat')
    const phrasesTatRus = getWordsFirstSecond(
      Language.tat,
      Language.rus,
      tatPhrases,
      rusPhrases,
      phrases
    )
    setState((prev: any) => ({ ...prev, word: words, words: wordsTatRus, phrases: phrasesTatRus, collect: phrases }))
  }

  async function getWordsAndPhrases () {
    const localStorageWords = localStorage.getItem('words')
    const localStoragePhrases = localStorage.getItem('phrases')
    if (word.length === 0 || phrases.length === 0) {
      if (localStorageWords && localStoragePhrases) {
        const wordsData: WordsInterface[] = JSON.parse(localStorageWords)
        const phrasesData: WordsInterface[] = JSON.parse(localStorageWords)

        // const size = 6
        // const items:WordsInterface[] = wordsData.slice(0, size)
        setWordsAndPhrases(wordsData, phrasesData)
      } else {
        if (wordsData && phrasesData) {
          const words = wordsData.getAllWords
          const phrases = phrasesData.getAllPhrases
          setWordsAndPhrases(words, phrases)
          localStorage.setItem('words', JSON.stringify(words))
          localStorage.setItem('phrases', JSON.stringify(phrases))
        }
      }
    }
  }

  useEffect(() => {
    getWordsAndPhrases()
  }, [wordsData, phrasesData])

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
        <YMInitializer accounts={[72761164]} version='2' />
        {/* <YMInitializer accounts={[72761164]} options={{ webvisor: true }} version='2' /> */}
      </div>
    </AppContext.Provider>
  )
}

export default App
