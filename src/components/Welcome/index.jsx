import {Button, Divider} from "antd";
import React from "react";

const Welcome = ({state, setState}) => {

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
            <Button onClick={handleWordsButton}>Слова</Button>
            <Divider />
            <Button onClick={handlePhrasesButton}>Фразы</Button>
            <Divider />
            <Button onClick={handleDragAndDropButton}>Собери</Button>
        </>

    )
}

export default Welcome

