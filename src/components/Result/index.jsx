import React from 'react';
import {List, Typography, Divider, Button} from 'antd';
import Welcome from "../Welcome";

const Result = ({state, setState}) => {
        const {
            result, language
        } = state;

        function footer() {
            return (
                <>
                    <Button onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: state.chosenGame})
                    }}>{language === ('rus' || 'tat') ? 'Повторить' : 'Repeat'}</Button>
                    <Divider/>
                    <Button onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: 'welcome'})
                    }}>{language === ('rus' || 'tat') ? 'Главное окно' : 'Main Page'}</Button>
                </>

            )

        }

        return (
            <div>
                <List
                    header={<div>{language === ('rus' || 'tat') ? 'Результат' : 'Result'}</div>}
                    footer={footer()}
                    bordered
                    dataSource={result}
                    renderItem={item => {
                        const {correct, questionText} = item;
                        return (
                            <List.Item>
                                <Typography.Text>{questionText} : {correct === true ? 'Верно/Correct' : 'Неверно/Wrong'}</Typography.Text>
                            </List.Item>
                        )
                    }}
                />

            </div>
        );
    }
;

export default Result;
