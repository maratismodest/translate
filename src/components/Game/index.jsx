import React, {useEffect, useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Button} from "antd";
import useSound from 'use-sound';
import Title from "antd/es/typography/Title";
import sound from '../../sounds/sound.mp3';
import wrong from '../../sounds/wrong.mp3';

import kitap from '../../sounds/words/kitap.mp3';
import alma from '../../sounds/words/alma.mp3';
import el from '../../sounds/words/el.mp3';
import keshe from '../../sounds/words/keshe.mp3';
import avyl from '../../sounds/words/avyl.mp3';
import bala from '../../sounds/words/bala.mp3';
import esh from '../../sounds/words/esh.mp3';
import bash from '../../sounds/words/bash.mp3';
import vakyt from '../../sounds/words/vakyt.mp3';
import suz from '../../sounds/words/suz.mp3';
import kon from '../../sounds/words/kon.mp3';

const initialQuestions = [
    {
        id: 0,
        questionText: 'Китап',
        correct: 2,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: kitap
    },
    {
        id: 1,
        questionText: 'Алма',
        correct: 3,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: alma
    },
    {
        id: 2,
        questionText: 'Ел',
        correct: 2,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Год"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Дождь"},
        ],
        audio: el
    },
    {
        id: 3,
        questionText: 'Кеше',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Человек"},
        ],
        audio: keshe
    },
    {
        id: 4,
        questionText: 'Эш',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Работа"},
        ],
        audio: esh
    },
    {
        id: 5,
        questionText: 'Көн',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "День"},
        ],
        audio: kon
    },
    {
        id: 6,
        questionText: 'Авыл',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Деревня"},
        ],
        audio: avyl
    },
    {
        id: 7,
        questionText: 'Бала',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Ребенок"},
        ],
        audio: bala
    },
    {
        id: 8,
        questionText: 'Вакыт',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Время"},
        ],
        audio: vakyt
    },
    {
        id: 9,
        questionText: 'Баш',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Голова"},
        ],
        audio: bash
    },
    {
        id: 10,
        questionText: 'Сүз',
        correct: 4,
        options: [
            {id: 1, text: "Рубашка"},
            {id: 2, text: "Книга"},
            {id: 3, text: "Яблоко"},
            {id: 4, text: "Слово"},
        ],
        audio: suz
    },
//     Ел – год, лет;
// Кеше – человек;
// Эш – работа, деятельность, занятие, труд;
// Көн – день, сутки;
// Авыл – деревня, село, селение;
// Бала – ребёнок, дитя, младенец, малыш;
// Халык – народ, толпа, люди (в широком смысле);
// Вакыт – время, пора, период;
// Баш – голова, ум, разум, вершина чего-либо;
// Сүз – слово;


]

const Game = () => {
        const initialState = {
            result: [],
            finished: false,
            currentQuestionIndex: 0,
            questions: _.shuffle(initialQuestions).slice(1, 6),
        }
        const [state, setState] = useState(initialState);
        const {currentQuestionIndex, result, questions, finished, currentAudio} = state


        const Question = () => {
            const question = questions[currentQuestionIndex];
            const {options, questionText, correct, id: questionId, audio} = question
            const shuffledOptions = _.shuffle(options)
            const [yes] = useSound(sound);
            const [no] = useSound(wrong);
            const [word] = useSound(audio)

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
                                currentQuestionIndex: currentQuestionIndex + 1,
                                result: [...result, res],
                                finished: true
                            })
                        }

                        window.clearTimeout(timeout)
                    }, 500)


                }
                const {id, text} = option;
                // const timeout = window.setTimeout(() => {
                //
                //     window.clearTimeout(timeout)
                // }, 500)
                return <li key={id}>
                    <Button onClick={() => {
                        handleClick(id);

                    }} block>{text}</Button>

                </li>
            })

            useEffect(()=>{
                word()
            },[word])
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


        return (
            <StyledGame>
                {finished === false ? <Question/> : <Result state={state} setState={setState}/>}
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