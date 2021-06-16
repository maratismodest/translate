import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import Slab from '../../ui/Slab'
import Header from '../../ui/Header'
import Word from './word.svg'
import Phrase from './phrase.svg'
import AppContext from '../../context/AppContext'
import classes from './PickGame.module.scss'

const PickGame = () => {
  const { state, setState } = useContext(AppContext)
  return (
    <div className={classes.pickGame}>
      <Header level={2} bold>
        {i18n.t('pickGame')}
      </Header>
      <div className={classes.slabs}>
        <Link to={'/words'}>
          <Slab
            normal
            onClick={() => {
              setState({
                ...state,
                chosenGame: 'words'
              })
            }}
          >
            <img src={Word} alt={'word'} />
            {i18n.t('wordsText')}
          </Slab>
        </Link>

        <Link to={'/word'}>
          <Slab
            normal
            onClick={() => {
              setState({
                ...state,
                chosenGame: 'word'
              })
            }}
          >
            <img src={Word} alt={'word'} />
            {i18n.t('collectWord')}
          </Slab>
        </Link>

        <Link to={'/phrases'}>
          <Slab
            normal
            onClick={() => {
              setState({
                ...state,
                chosenGame: 'phrases'
              })
            }}
          >
            <img src={Phrase} alt={'phrase'} />
            {i18n.t('phrases')}
          </Slab>
        </Link>

        <Link to={'/collect'}>
          <Slab
            normal
            onClick={() => {
              setState({
                ...state,
                chosenGame: 'collect'
              })
            }}
          >
            <img src={Phrase} />
            {i18n.t('collectPhrase')}
          </Slab>
        </Link>
      </div>
    </div>
  )
}

export default PickGame
