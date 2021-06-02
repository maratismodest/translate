import React, { useContext, useState } from "react";
import { NewWord } from "./NewWord";
import { CourseContext } from "../../index";

export const Topic = () => {
  const { word, setIndex, index, words } = useContext(CourseContext);
  console.log(word);
  if (!word) {
    return <div>Loader..</div>;
  }
  return (
    <div>
      <h1>Topic</h1>
      <NewWord />
    </div>
  );
};
