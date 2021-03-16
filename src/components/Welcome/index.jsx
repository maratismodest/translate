import {Divider} from "antd";
import React from "react";
import {translateBase} from '../../localBase/base'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'
import styled from 'styled-components'
import {device} from "../responsiveStyled";
import ReactLogo from './welcome.svg'

const Welcome = ({state, setState}) => {
    if (!state) {
        return <div>Загрузка</div>
    }
    console.log("state", state)
    const {language} = state;
    const {wordsText, phrases, dragAndDrop} = translateBase[language];
    console.log(wordsText, phrases, dragAndDrop)

    const handleWordsButton = () => {
        setState({...state, chosenGame: 'words', gameState: 'words', currentQuestionIndex: 0})
    }
    const handlePhrasesButton = () => {
        setState({...state, chosenGame: 'phrases', gameState: 'phrases', currentQuestionIndex: 0})
    }
    const handleDragAndDropButton = () => {
        setState({...state, chosenGame: 'collect', gameState: 'collect', currentQuestionIndex: 0})
    }
    return (


            <StyledWelcome>
                <StyledWallPaper>
                    <img src={ReactLogo} alt="Chamala" width={'100%'} />

                </StyledWallPaper>
                <div>
                    <StyledHeader>Выучи разговорные фразы
                        на татарском языке
                        в формате мини-игр</StyledHeader>
                    <div>
                        <Link to={'/words'}><Button size={"large"}
                                                    onClick={handleWordsButton}>{wordsText}</Button></Link>
                        <Divider/>
                        <Link to={'/phrases'}><Button size={"large"}
                                                      onClick={handlePhrasesButton}>{phrases}</Button></Link>
                        <Divider/>
                        <Link to={'/collect'}><Button size={"large"}
                                                      onClick={handleDragAndDropButton}>{dragAndDrop}</Button></Link>
                    </div>
                </div>
            </StyledWelcome>



    )
}

export default Welcome

const StyledWelcome = styled.div`
  width: 100%;
`

const StyledWallPaper = styled.div`
    max-width: 50%;
`


const StyledHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  color: #718CCC;
  max-width: 618px;
  text-align: center;

  @media ${device.desktop} {
    font-size: 46px;
    line-height: 133%;
    padding-bottom: 75px;

  }
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 126%;
    padding-bottom: 30px;
    max-width: 80%;
  }

`





