import {Button, Divider} from "antd";
import React from "react";
import {translateBase} from '../Game/base'
import {Link} from "react-router-dom";

const Welcome = ({state, setState}) => {
    if (!state) {
        return <div>Загрузка</div>
    }
    console.log("state", state)
    const {language} = state;
    // return <div>Welcome</div>

    // console.log("language", language)
    // console.log("translateBase[language];", translateBase[language])
    //
    const {words, phrases, dragAndDrop} = translateBase[language];
    console.log(words, phrases, dragAndDrop)

    const handleWordsButton = () => {
        setState({...state, chosenGame: 'words', gameState: 'words',currentQuestionIndex:0})
    }
    const handlePhrasesButton = () => {
        setState({...state, chosenGame: 'phrases', gameState: 'phrases', currentQuestionIndex:0})
    }
    const handleDragAndDropButton = () => {
        setState({...state, chosenGame: 'dragAndDrop', gameState: 'dragAndDrop',currentQuestionIndex:0})
    }
    return (
        <>
            <Link to={'/words'}><Button size={"large"}>{words}</Button></Link>
            <Divider/>
            <Button size={"large"} onClick={handlePhrasesButton}>{phrases}</Button>
            <Divider/>
            <Button size={"large"} onClick={handleDragAndDropButton}>{dragAndDrop}</Button>
        </>
        // <>
        //     <Link to={'/words'}><Button size={"large"} onClick={handleWordsButton}>{words}</Button></Link>
        //     <Divider/>
        //     <Button size={"large"} onClick={handlePhrasesButton}>{phrases}</Button>
        //     <Divider/>
        //     <Button size={"large"} onClick={handleDragAndDropButton}>{dragAndDrop}</Button>
        // </>

    )
}

export default Welcome

