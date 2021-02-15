import React, {useState} from 'react';
import Result from "../Result";
import _ from 'lodash';
import styled from 'styled-components'
import {Button} from "antd";
import Title from "antd/es/typography/Title";

const Game = () => {
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
            ]
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
            ]
        },
        {
            id: 2,
            questionText: 'Кулмек',
            correct: 1,
            options: [
                {id: 1, text: "Рубашка"},
                {id: 2, text: "Книга"},
                {id: 3, text: "Яблоко"},
                {id: 4, text: "Дождь"},
            ]
        },
        {
            id: 3,
            questionText: 'Янгыр',
            correct: 4,
            options: [
                {id: 1, text: "Рубашка"},
                {id: 2, text: "Книга"},
                {id: 3, text: "Яблоко"},
                {id: 4, text: "Дождь"},
            ]
        },


    ]

    const initialState = {
        result: [],
        finished: false,
        currentQuestionIndex: 0,
        questions: _.shuffle(initialQuestions)
    }
    const [state, setState] = useState(initialState);
    const Question = () => {
        const {currentQuestionIndex, result, questions} = state
        const question = questions[currentQuestionIndex];
        const {options, questionText, correct, id: questionId} = question

        const shuffledOptions = _.shuffle(options)

        const Options = shuffledOptions.map((option, index) => {
            const handleClick = (id) => {
                setTimeout(() => {
                console.log("handleClick", state)
                const res = id === correct ? {
                    correct: true,
                    id: questionId,
                    questionText: questionText
                } : {correct: false, id: questionId, questionText: questionText}

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
                }, 500);

            }
            const {id, text} = option;
            return <li key={id}>
                <Button onClick={() => {
                    handleClick(id)
                }} block>{text}</Button>

            </li>
        })

        return (
            <div style={{textAlign: "center"}}>
                <Title>{questionText}</Title>
                <ul style={{width: '200px'}}>
                    {Options}
                </ul>
            </div>
        )
    }
    const {finished} = state;
    return (
        <StyledGame>
            {finished ? <Result state={state} setState={setState}/> : <Question/>}
        </StyledGame>
    );
};

export default Game;

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`