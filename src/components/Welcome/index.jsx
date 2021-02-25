import {Button, Divider} from "antd";
import React from "react";
import {translateBase} from '../Game/base'

const Welcome = ({state, setState}) => {
    const {language} = state;
    console.log("language", language)
    console.log("translateBase[language];", translateBase[language])

    const {words, phrases, dragAndDrop} = translateBase[language];
    console.log(words, phrases, dragAndDrop)

    const handleWordsButton = () => {
        setState({...state, chosenGame: 'words', gameState: 'words'})
    }
    const handlePhrasesButton = () => {
        setState({...state, chosenGame: 'phrases', gameState: 'phrases'})
    }
    const handleDragAndDropButton = () => {
        setState({...state, chosenGame: 'dragAndDrop', gameState: 'dragAndDrop'})
    }
    return (
        <>
            <Button size={"large"} onClick={handleWordsButton}>{words}</Button>
            <Divider/>
            <Button size={"large"} onClick={handlePhrasesButton}>{phrases}</Button>
            <Divider/>
            <Button size={"large"} onClick={handleDragAndDropButton}>{dragAndDrop}</Button>
        </>

    )
}

export default Welcome

