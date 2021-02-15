import React from 'react';
import {List, Typography, Divider, Button} from 'antd';

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
    return (
        <div>
            <List
                header={<div>Результат</div>}
                footer={<Button onClick={()=>{setState({...state, currentQuestionIndex: 0, finished: false, result: []})}}>Повторить</Button>}
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
