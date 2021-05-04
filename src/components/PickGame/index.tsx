import React from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import Slab from "../../ui/Slab";
import Header from "../../ui/Header";
import styled from "styled-components";
import Word from "./word.svg";
import Phrase from "./phrase.svg";

const PickGame = () => {
  return (
    <div>
      <Header level={2} bold>
        Выбери мини-игру:
      </Header>
      <StyledSlabs>
        <Link to={"/words"}>
          <Slab normal>
            <img src={Word} />
            {i18n.t("wordsText")}
          </Slab>
        </Link>

        <Link to={"/word"}>
          <Slab normal>
            <img src={Word} />
            Собери слово
          </Slab>
        </Link>

        <Link to={"/phrases"}>
          <Slab normal>
            <img src={Phrase} />
            {i18n.t("phrases")}
          </Slab>
        </Link>

        <Link to={"/collect"}>
          <Slab normal>
            <img src={Phrase} />
            Собери фразу
          </Slab>
        </Link>
      </StyledSlabs>
    </div>
  );
};

export default PickGame;

const StyledSlabs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  button {
    margin-bottom: 20px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: space-evenly;
  }
`;