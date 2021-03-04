import React from 'react';
import {List, Typography, Divider, Button} from 'antd';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {StyledGame} from "../../App";

const Result = ({state, setState}) => {
        const {
            result, language, translate, chosenGame
        } = state;
        const {repeat, resultText, wrong, right, mainPage} = translate;
        console.log("translate",translate)
        console.log("chosenGame", chosenGame)
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
            <StyledGame>
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
            </StyledGame>

        );
    }
;

export default Result;

const StyledList = styled(List)`
width: 100%;
max-width: 350px;
`