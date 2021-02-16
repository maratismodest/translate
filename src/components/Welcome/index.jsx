import {Button} from "antd";
import React from "react";

const Welcome = ({state, setState}) => {
    console.log("Welcome")
    const handleStartButton = () =>{
        console.log("handleStartButton")
        console.log(state)
        setState(prevState => ({...prevState, gameState: 'game'}))
    }
    return (
            <Button onClick={handleStartButton}>Алга!</Button>
    )
}

export default Welcome

