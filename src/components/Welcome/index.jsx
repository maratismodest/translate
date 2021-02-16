import {Button, Divider} from "antd";
import React from "react";
import {initialState} from "../Game";

const Welcome = ({state, setState}) => {
    console.log("Welcome")
    const handleWordsButton = () => {
        console.log("handleStartButton")
        console.log(state)
        setState({...initialState, gameState: 'words'})
    }
    const handlePhrasesButton = () => {
        console.log("handleStartButton")
        console.log(state)
        setState({...initialState, gameState: 'phrases'})
    }
    return (
        <>
            <Button onClick={handleWordsButton}>Слова</Button>
            <Divider />
            <Button onClick={handlePhrasesButton}>Фразы</Button>
        </>

    )
}

export default Welcome

