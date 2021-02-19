import React from 'react';
import {List, Typography, Divider, Button} from 'antd';
import {initialState} from "../Game";

const Result = ({state, setState}) => {
    const {
        result,
        finished,
        currentQuestionIndex,
        questions,
    } = state;
    console.log("Result");
    const ResultList = result.map((item, index) => {
        const {id, correct, questionText} = item;
        return (
            <li key={index}>{questionText} : {correct === true ? 'Верно' : 'Неверно'} </li>
        )
    })

    function footer() {
        return (
            <>
                <Button onClick={() => {
                    setState({...state, currentQuestionIndex: 0, result: [],gameState: state.chosenGame})
                }}>Повторить</Button>
                <Divider/>
                <Button onClick={() => {
                    setState({...state, currentQuestionIndex: 0, result: [],gameState: 'welcome'})
                }}>Главное окно</Button>
            </>

        )

    }

    return (
        <div>
            <List
                header={<div>Результат</div>}
                footer={footer()}
                bordered
                dataSource={result}
                renderItem={item => {
                    const {id, correct, questionText} = item;
                    return (
                        <List.Item>
                            <Typography.Text>{questionText} : {correct === true ? 'Верно' : 'Неверно'}</Typography.Text>
                        </List.Item>
                    )
                }}
            />

        </div>
    );
};

export default Result;
