import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Button} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';
import {initialQuestions} from "../../words";
import Welcome from "../Welcome";

import MenuToggle from '../Navigation/MenuToggle/MenuToggle'
import Drawer from '../Navigation/Drawer/Drawer'

const Game = () => {
        const initialState = {
            menu: false,
            gameState: 'welcome',
            result: [],
            finished: false,
            currentQuestionIndex: 0,
            questions: _.shuffle(initialQuestions).slice(1, 6),
        }
        const [state, setState] = useState(initialState);
        const {currentQuestionIndex, result, questions, finished, currentAudio, gameState} = state


        const toggleMenuHandler = () => {
            setState({...state, menu: !state.menu})
        }

        const menuCloseHandler = () => {
            setState({...state, menu: false})
        }


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
                                gameState: 'result'
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
                    <ul style={{width: '200px'}}>
                        {Options}
                    </ul>
                </div>
            )
        }


        function res() {
            switch (gameState) {
                case 'welcome':
                    return <Welcome state={state} setState={setState}/>
                case 'game':
                    return <Question/>
                case 'result':
                    return <Result state={state} setState={setState}/>
                default:
                    return null
            }
        }


        return (
            <StyledGame>
                <Drawer
                    isOpen={state.menu}
                    onClose={menuCloseHandler}
                />

                <MenuToggle
                    onToggle={toggleMenuHandler}
                    isOpen={state.menu}
                />

                <main>
                    {res()}
                </main>

            </StyledGame>
        );
    }
;


export default Game;

const StyledGame = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`