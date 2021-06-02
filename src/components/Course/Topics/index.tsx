import React, {useContext} from "react";
import {Button} from "../../../ui/Button";
import {CourseContext} from "../index";

export const Topics = () => {
    const {
        word,
        setWord,
        setWordIndex,
        wordIndex,
        words,
        topics,
        setStart,
    } = useContext(CourseContext);
    return (
        <div>
            <h1>Topics</h1>
            {topics.map((topic: string) => {
                return (
                    <div key={topic} style={{marginTop: 10}}>
                        <Button
                            onClick={() => {
                                console.log("pronouns");
                                setStart(true);
                            }}
                        >
                            {topic}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};
