import React from 'react';
import {List, Typography, Divider, Button} from 'antd';

const Result = ({state, setState}) => {
    const {
        result
    } = state;
    // console.log("Result");

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
                    const { correct, questionText} = item;
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
