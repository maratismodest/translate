import {Divider} from "antd";
import React from "react";
import {translateBase} from '../../localBase/base'
import {Link} from "react-router-dom";
import Button from '../../ui/Button'
import ReactLogo from './welcome.svg'
import {StyledWelcome, StyledWallPaper, StyledWelcomeMenu, StyledHeader} from './WelcomeStyles'

const Welcome = ({state, setState} : {any, any}) => {
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
                <img src={ReactLogo} alt="Chamala" width={'100%'}/>

            </StyledWallPaper>
            <StyledWelcomeMenu>
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
            </StyledWelcomeMenu>
        </StyledWelcome>


    )
}

export default Welcome






