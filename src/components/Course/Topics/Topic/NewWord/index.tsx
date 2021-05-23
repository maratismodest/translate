import React, { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import { CourseContext, WordInterface } from "../../../index";
import { Paragraph } from "../../../../../ui/Paragraph";
import { Button } from "../../../../../ui/Button";

export const NewWord = () => {
  const { word, setWordIndex, setWord, words, wordIndex } = useContext(
    CourseContext
  );

  const { original, translate, sound, image } = word;
  const [play] = useSound(sound);

  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Course</h1>
      <div>
        <img height={100} src={image} alt={""} />
        <Paragraph>{original}</Paragraph>
        <Paragraph>{translate}</Paragraph>
        <Button onClick={play}>Play</Button>
        <div></div>
        <Button
          onClick={() => {
            setWord(words[wordIndex + 1]);
            setWordIndex((prev: number) => prev + 1);
          }}
        >
          Дальше
        </Button>
      </div>
    </div>
  );
};
