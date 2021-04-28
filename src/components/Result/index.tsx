import React, {useContext, useEffect, useState} from 'react';
import {List, Typography} from 'antd';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'
import {device} from "../../localBase/responsiveStyled";
import i18n from "i18next";
import {StateInterface} from "../../localBase/interfaces";
import {FacebookIcon, FacebookShareButton, VKIcon, VKShareButton} from "react-share";
import {StyledWelcome} from "../Welcome/WelcomeStyles";
import axios from "axios";
import AppContext from "../../AppContext";


interface ResultItemInterface {
    chosenText: string
    correct: boolean
    correctText: string
    id: number
    questionText: string
}

const Result = ({
                    user,
                    signOut,
                    signInWithGoogle
                }: any) => {
    const {state, setState} = useContext(AppContext)
        const {
            result, language, chosenGame
        } = state;


        const [db, setDb] = useState<any>(null);

        async function getInfo() {
            try {
                // const res = await axios.get(replaceURL(url));
                const res = await axios.get(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json`);
                console.log('res', res);
                return res
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
        }

        async function addCount(id: string) {
            try {
                const current = db[user.uid];
                const updated = {...current, count: current.count + 1};
                console.log(updated)
                const res = await axios.put(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`, updated);
                console.log('res', res);
                return res
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
        }

        useEffect(() => {
            getInfo().then((res) => {
                console.log(res)
                setDb(res.data)

            })
        }, [])

        if (!user) {
            return <div>Loader</div>
        }
        if (user) {
            console.log(user)
            addCount(user.uid).then((res) => {
                console.log(res);
                console.log('added Count')
                // window.location.reload();
            })
        }

        return (
            <ResultWrapper className={'test'}>
                <ResultWrap>
                    <StyledList
                        header={<Header>{i18n.t("resultText")}:</Header>}
                        dataSource={result}
                        renderItem={(item: any) => {
                            const {correct, questionText, chosenText} = item;
                            const color = correct ? `var(--color-green)` : `var(--color-red)`
                            return (
                                <List.Item style={{padding: 0, margin: 0}}>
                                    <Typography.Text>
                                        <QuestionText>{questionText} - {chosenText}:&nbsp;</QuestionText>
                                        <QuestionResult
                                            color={color}>{correct ? i18n.t("right") : i18n.t("wrong")}</QuestionResult>
                                    </Typography.Text>
                                </List.Item>
                            )
                        }}
                    />
                    {/*<StyledWallPaper>*/}
                    {/*    <img src={wellDoneImage} alt="Result" width={'100%'} height={'100%'}/>*/}
                    {/*</StyledWallPaper>*/}
                </ResultWrap>
                <ResultFooter>
                    <TryAgainWrap>
                        <TryAgain>{i18n.t("wellDone")}</TryAgain>
                        <div style={{paddingLeft: 8}}>
                            <FacebookShareButton
                                url={'https://chamala.ru'}
                                title="Chamala"
                                quote={'Пожалуйста, поделитесь ссылкой на сайт! Вы поможете его продвижению'}

                            >
                                <FacebookIcon round size="2.5rem"/>
                            </FacebookShareButton>

                            <VKShareButton
                                url={'https://chamala.ru'}
                                title="Chamala"
                                image="https://chamala.ru/sharePicture.png"

                            >
                                <VKIcon round size="2.5rem"/>
                            </VKShareButton>
                        </div>
                    </TryAgainWrap>
                    <Link to={`/${chosenGame}`}><Button size={'large'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: chosenGame})
                    }}>{i18n.t("repeat")}</Button></Link>
                </ResultFooter>

                <StyledGetMain>
                    <Link to={'/'} onClick={() => {
                        setState({...state, currentQuestionIndex: 0, result: [], gameState: 'welcome'})
                    }}>
                        {i18n.t("mainPage")}</Link>
                </StyledGetMain>
            </ResultWrapper>


        );
    }
;

export default Result;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${device.desktop} {
    min-width: 500px;
  }
  @media ${device.laptop} {
    min-width: auto;
  }
`
const ResultWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledWallPaper = styled.div`
  max-width: 50%;
`

const StyledList = styled(List)`
  width: 100%;

  @media ${device.desktop} {
    max-width: 500px;
  }
  @media ${device.laptop} {
    max-width: 100%;


  }

`

const ResultFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    padding-top: 50px;
  }
  @media ${device.laptop} {
    padding-top: 40px;
  }

`

const Header = styled.h2`

  color: var(--color-primary);
  font-weight: 500;
  @media ${device.desktop} {

    font-size: 46px;
    line-height: 133%;
  }
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 126%;

  }
`


const StyledGetMain = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  bottom: 0;
  display: flex;
  justify-content: center;
  @media ${device.desktop} {
    padding-bottom: 70px;
  }
  @media ${device.laptop} {
    padding-bottom: 32px;

  }
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
`

const TryAgainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.desktop} {
    padding-bottom: 40px;
  }
  @media ${device.laptop} {
    padding-bottom: 20px;
  }
`