import React from 'react';
import {List, Typography, Divider, Button} from 'antd';
import styled from 'styled-components'
import Welcome from "../Welcome";
import {Link} from "react-router-dom";

const Result = ({state, setState}) => {
        const {
            result, language, translate, chosenGame
        } = state;
        const {repeat, resultText, wrong, right, mainPage} = translate;

        console.log(translate)
        function footer() {
            return (
                <>
                    <Link to={`/${chosenGame}`}><Button size={'large'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: chosenGame})
                    }}>{repeat}</Button></Link>
                    <Divider/>
                    <Link to={'/'}><Button size={'large'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: 'welcome'})
                    }}>{mainPage}</Button></Link>
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