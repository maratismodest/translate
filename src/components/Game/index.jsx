import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Tag, Button, Divider} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';
import {PlayCircleOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import Welcome from "../Welcome";
import AidaMenu from "../AidaMenu";
import {words} from "./words";
import {phrases} from "./phrases";
import {YMInitializer} from 'react-yandex-metrika';
import NavMenu from "../NavMenu";
import {
    initialState,
    phrasesEngTat,
    phrasesRusTat,
    phrasesTatEng,
    phrasesTatRus, translateBase,
    wordsEngTat,
    wordsRusTat,
    wordsTatEng,
    wordsTatRus
} from "./base";



const Game = () => {
        const [state, setState] = useState(initialState);
        const {
            currentQuestionIndex,
            result,
            questions,
            phrases,
            finished,
            currentAudio,
            gameState,
            language,
            translate,
            chosenGame
        } = state;


        //Проверяем: если это не последний вопрос, то показываем следующий, если последний - то отображаем результаты
        function checkGameState(chosenGame, questionResult) {
            if (currentQuestionIndex + 1 < phrases.length) {
                setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, questionResult]})
            } else {
                setState({
                    ...state,
                    currentQuestionIndex: 0,
                    result: [...result, questionResult],
                    finished: true,
                    gameState: 'result',
                    chosenGame: chosenGame
                })
            }
        }

        useEffect(() => {
            switch (language) {
                case 'tat':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsTatRus).slice(1, 6),
                        phrases: _.shuffle(phrasesTatRus).slice(1, 6),
                        translate: translateBase.tat
                    })))
                    break;
                case 'rus':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsRusTat).slice(1, 6),
                        phrases: _.shuffle(phrasesRusTat).slice(1, 6),
                        translate: translateBase.rus
                    })))
                    break;
                case 'tateng':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsTatEng).slice(1, 6),
                        phrases: _.shuffle(phrasesTatEng).slice(1, 6),
                        translate: translateBase.eng
                    })))
                    break;
                case 'engtat':
                    setState((prevState => ({
                        ...prevState,
                        questions: _.shuffle(wordsEngTat).slice(1, 6),
                        phrases: _.shuffle(phrasesEngTat).slice(1, 6),
                        translate: translateBase.eng
                    })))
                    break;
                default:
                    break;
            }
        }, [gameState, language])


        return (
            <StyledGame>
                <StyledMenu>
                    <AidaMenu state={state} setState={setState}/>
                </StyledMenu>
                {/*<StyledNavMenu>*/}
                {/*    <NavMenu state={state} setState={setState}/>*/}
                {/*</StyledNavMenu>*/}
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
            </StyledGame>
        );
    }
;


export default Game;

export const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledQuestion = styled.div`
  text-align: center;
  width: 100%;
  max-width: 350px;
`

const StyledNavMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`

const StyledGame = styled.div`
  padding: 5%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
`

const StyledResult = styled.ul`
  min-width: 200px;
  display: flex;
  min-height: 40px;
  // flex-wrap: wrap;
  margin-top: 16px;
  // padding: 12px 0;
  max-width: 350px;
`
const StyledUl = styled.ul`
  width: auto;
  min-width: 200px;
  display: flex;
  min-height: 120px;
  flex-wrap: wrap;
  padding: 12px 0;
  //max-width: 300px;
`
export const StyledPhrase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`