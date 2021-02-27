import {Button, Divider} from "antd";
import React from "react";
import {translateBase} from '../localBase/base'
import {Link} from "react-router-dom";

const Welcome = ({state, setState}) => {
    if (!state) {
        return <div>Загрузка</div>
    }
    console.log("state", state)
    const {language} = state;
    const {words, phrases, dragAndDrop} = translateBase[language];
    console.log(words, phrases, dragAndDrop)

    const handleWordsButton = () => {
        setState({...state, chosenGame: 'words', gameState: 'words',currentQuestionIndex:0})
    }
    const handlePhrasesButton = () => {
        setState({...state, chosenGame: 'phrases', gameState: 'phrases', currentQuestionIndex:0})
    }
    const handleDragAndDropButton = () => {
        setState({...state, chosenGame: 'collect', gameState: 'collect',currentQuestionIndex:0})
    }
    return (
        <>
            <Link to={'/words'}><Button size={"large"} onClick={handleWordsButton}>{words}</Button></Link>
            <Divider/>
            <Link to={'/phrases'}><Button size={"large"} onClick={handlePhrasesButton}>{phrases}</Button></Link>
            <Divider/>
            <Link to={'/collect'}><Button size={"large"} onClick={handleDragAndDropButton}>{dragAndDrop}</Button></Link>
        </>

    )
}

export default Welcome

