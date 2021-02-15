import React from 'react';
import { List, Typography, Divider } from 'antd';

const Result = ({state}) => {
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
                footer={<div>Повторить</div>}
                bordered
                dataSource={result}
                renderItem={item => {
                    const {id, correct, questionText} = item;
                    return (
                    <List.Item>
                        <Typography.Text mark>{questionText} : {correct === true ? 'Верно' : 'Неверно'}</Typography.Text>
                    </List.Item>
                )}}
            />

        </div>
    );
};

export default Result;
