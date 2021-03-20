import {Divider} from "antd";
import React, {useEffect, useState} from "react";
import {InitialStateInterface} from '../../localBase/base'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'
import ReactLogo from './welcome.svg'
import {StyledWelcome, StyledWallPaper, StyledWelcomeMenu, StyledHeader} from './WelcomeStyles'
import i18n from "i18next";

export const translateBaseI18 = {
    eng: {
        translation: {
            "welcome": "English"
        }
    },
    rus: {
        translation: {
            "welcome": "Русский"
        }
    }
}


const Welcome = ({state, setState}: { state: InitialStateInterface, setState: any }) => {

    i18n.init({
        resources: translateBaseI18,
        lng: "rus"
    });


    if (!state) {
        return <div>Загрузка</div>
    }
    console.log("state", state)


    const {translate} = state;
    console.log("translate", translate)
    const {wordsText, phrases, dragAndDrop, welcomeText} = translate;
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
                <img src={ReactLogo} alt="Chamala" width={'100%'}/>

            </StyledWallPaper>
            <StyledWelcomeMenu>
                {/*<h2>{i18n.t('welcome')}</h2>*/}
                <StyledHeader>{welcomeText}</StyledHeader>

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
            </StyledWelcomeMenu>
        </StyledWelcome>


    )
}

export default Welcome






