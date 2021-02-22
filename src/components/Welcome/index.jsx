import {Button, Divider} from "antd";
import React from "react";

const Welcome = ({state, setState}) => {
    // console.log("Welcome")
    const handleWordsButton = () => {
        // console.log("handleStartButton")
        // console.log(state)
        setState({...state, gameState: 'words'})
    }
    const handlePhrasesButton = () => {
        // console.log("handleStartButton")
        // console.log(state)
        setState({...state, gameState: 'phrases'})
    }
    const handleDragAndDropButton = () => {
        // console.log("handleStartButton")
        // console.log(state)
        setState({...state, gameState: 'dragAndDrop'})
    }
    return (
        <>
            <Button onClick={handleWordsButton}>Слова</Button>
            <Divider />
            <Button onClick={handlePhrasesButton}>Фразы</Button>
            <Divider />
            <Button onClick={handleDragAndDropButton}>Собери</Button>
        </>

    )
}

export default Welcome

