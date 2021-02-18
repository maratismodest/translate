import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Button} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';
import {initialQuestions, initialPhrases} from "../../words";
import Welcome from "../Welcome";

import AidaMenu from "../AidaMenu";

export const initialState = {
    chosenGame: undefined,
    gameState: 'welcome',
    result: [],
    finished: false,
    currentQuestionIndex: 0,
    questions: _.shuffle(initialQuestions).slice(1, 6),
    phrases: _.shuffle(initialPhrases),
}

const Game = () => {

        const [state, setState] = useState(initialState);
        const {currentQuestionIndex, result, questions, phrases, finished, currentAudio, gameState} = state

        const Question = () => {
            const question = questions[currentQuestionIndex];
            const {options, questionText, correct, id: questionId} = question
            const shuffledOptions = _.shuffle(options)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            // const [word] = useSound(audio)

            const Options = shuffledOptions.map((option, index) => {
                const handleClick = (id) => {
                    const timeout = window.setTimeout(() => {
                        const res = id === correct ? {
                            correct: true,
                            id: questionId,
                            questionText: questionText
                        } : {correct: false, id: questionId, questionText: questionText}

                        id === correct ? yes() : no()
                        if (currentQuestionIndex + 1 < questions.length) {
                            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, res]})
                        } else {
                            setState({
                                ...state,
                                questions: _.shuffle(initialQuestions).slice(1, 6),
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true,
                                gameState: 'result',
                                chosenGame: 'words'
                            })
                        }

                        window.clearTimeout(timeout)
                    }, 500)


                }
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })

            // useEffect(() => {
            //     word()
            // }, [word])


            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {questions.length}</div>
                    <Title>{questionText}</Title>
                    <ul style={{minWidth: '200px'}}>
                        {Options}
                    </ul>
                </div>
            )
        }

        const Phrases = () => {
            const question = phrases[currentQuestionIndex];
            const {options, questionText, correct, id: questionId} = question
            const shuffledOptions = _.shuffle(options)
            const shuffledPhrases = _.shuffle(phrases)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            // const [word] = useSound(audio)

            const Options = shuffledOptions.map((option, index) => {
                const handleClick = (id) => {
                    const timeout = window.setTimeout(() => {
                        const res = id === correct ? {
                            correct: true,
                            id: questionId,
                            questionText: questionText
                        } : {correct: false, id: questionId, questionText: questionText}

                        id === correct ? yes() : no()
                        if (currentQuestionIndex + 1 < phrases.length) {
                            setState({...state, currentQuestionIndex: currentQuestionIndex + 1, result: [...result, res]})
                        } else {
                            setState({
                                ...state,
                                phrases: _.shuffle(initialPhrases).slice(1, 6),
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true,
                                gameState: 'result',
                                chosenGame: 'phrases'
                            })
                        }

                        window.clearTimeout(timeout)
                    }, 500)


                }
                const {id, text} = option;
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })

            // useEffect(() => {
            //     word()
            // }, [word])


            return (
                <div style={{textAlign: "center"}}>
                    <div>Вопрос {currentQuestionIndex + 1} из {phrases.length}</div>
                    <Title>{questionText}</Title>
                    <ul style={{minWidth: '200px'}}>
                        {Options}
                    </ul>
                </div>
            )
        }

        function res() {
            switch (gameState) {
                case 'welcome':
                    return <Welcome state={state} setState={setState}/>
                case 'words':
                    return <Question/>
                case 'phrases':
                    return <Phrases/>
                case 'result':
                    return <Result state={state} setState={setState}/>
                default:
                    return null
            }
        }


        return (
            <StyledGame>
                <StyledMenu>
                    <AidaMenu state={state} setState={setState}/>
                </StyledMenu>
                {res()}
            </StyledGame>
        );
    }
;


export default Game;

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledGame = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;
`