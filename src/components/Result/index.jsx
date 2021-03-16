import React from 'react';
import {List, Typography, Divider} from 'antd';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'

const Result = ({state, setState}) => {
        const {
            result, language, translate, chosenGame
        } = state;
        const {repeat, resultText, wrong, right, mainPage} = translate;
        console.log("translate", translate)
        console.log("chosenGame", chosenGame)


        return (
                <div>
                <StyledList
                    header={<Header>{resultText}:</Header>}
                    // footer={footer()}
                    bordered
                    dataSource={result}
                    renderItem={item => {
                        const {correct, questionText} = item;
                        // console.log("correct", correct)
                        const color = correct ? `var(--color-green)` : `var(--color-red)`
                        return (
                            <List.Item>
                                <Typography.Text>
                                    <QuestionText>{questionText}:&nbsp;</QuestionText>
                                    <QuestionResult color={color}>{correct ? right : wrong}</QuestionResult>
                                </Typography.Text>
                            </List.Item>
                        )
                    }}
                />
                <ResultFooter>
                    <TryAgain>Неплохо. Попробуй еще!</TryAgain>
                    <Link to={`/${chosenGame}`}><Button size={'large'} style={{marginTop: 40}} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: chosenGame})
                    }}>{repeat}</Button></Link>
                    {/*<Divider/>*/}
                </ResultFooter>
                <Link to={'/'} onClick={() => {
                    setState({...state, currentQuestionIndex: 0, result: [], gameState: 'welcome'})
                }}>
                    {mainPage}</Link>
                </div>


        );
    }
;

export default Result;

const StyledList = styled(List)`
  width: 100%;
  max-width: 350px;
`

const ResultFooter = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h2`
  font-weight: 500;
  font-size: 46px;
  line-height: 133%;
  color: var(--color-primary);
`

const QuestionText = styled.span`
  color: var(--color-primary);
  opacity: 0.8;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

const QuestionResult = styled.span`
  color: ${props => props.color || 'black'};
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`
const TryAgain = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-primary);
  //padding-top: 60px;
`