import {Divider} from "antd";
import React, {useEffect, useState} from "react";
import {InitialStateInterface, translateBaseI18} from '../../localBase/base'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'
import ReactLogo from './welcome.svg'
import {StyledWelcome, StyledWallPaper, StyledWelcomeMenu, StyledHeader, Buttons} from './WelcomeStyles'
import i18n from "i18next";

const Welcome = ({state, setState}: { state: InitialStateInterface, setState: any }) => {

    if (!state) {
        return <div>Загрузка</div>
    }

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
                <img src={ReactLogo} alt="Chamala" width={'100%'}/>

            </StyledWallPaper>
            <StyledWelcomeMenu>
                <StyledHeader>{i18n.t("welcomeText")}</StyledHeader>

                <Buttons>
                    <Link to={'/words'}><Button size={"large"}
                                                onClick={handleWordsButton}>{i18n.t("wordsText")}</Button></Link>
                    <Divider/>
                    <Link to={'/phrases'}><Button size={"large"}
                                                  onClick={handlePhrasesButton}>{i18n.t("phrases")}</Button></Link>
                    <Divider/>
                    <Link to={'/collect'}><Button size={"large"}
                                                  onClick={handleDragAndDropButton}>{i18n.t("dragAndDrop")}</Button></Link>
                </Buttons>
            </StyledWelcomeMenu>
        </StyledWelcome>


    )
}

export default Welcome






