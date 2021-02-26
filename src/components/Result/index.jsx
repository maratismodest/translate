import React from 'react';
import {List, Typography, Divider, Button} from 'antd';
import styled from 'styled-components'
import Welcome from "../Welcome";

const Result = ({state, setState}) => {
        const {
            result, language, translate, chosenGame
        } = state;

        console.log("Result", state)

        const {repeat, resultText, wrong, right, mainPage} = translate;
        console.log(translate)
        function footer() {
            return (
                <>
                    <Button size={'large'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: chosenGame})
                    }}>{repeat}</Button>
                    <Divider/>
                    <Button size={'large'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: 'welcome'})
                    }}>{mainPage}</Button>
                </>

            )

        }

        return (
                <StyledList
                    header={<div>{resultText}</div>}
                    footer={footer()}
                    bordered
                    dataSource={result}
                    renderItem={item => {
                        const {correct, questionText} = item;
                        return (
                            <List.Item>
                                <Typography.Text>{questionText} : {correct === true ? right : wrong }</Typography.Text>
                            </List.Item>
                        )
                    }}
                />


        );
    }
;

export default Result;

const StyledList = styled(List)`
width: 100%;
max-width: 350px;
`