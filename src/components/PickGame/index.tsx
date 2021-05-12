import React from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import Slab from "../../ui/Slab";
import Header from "../../ui/Header";
import styled from "styled-components";
import Word from "./word.svg";
import Phrase from "./phrase.svg";
import { isMobile } from "react-device-detect";

const PickGame = () => {
  return (
    <Styled>
      <Header level={2} bold>
        {i18n.t("pickGame")}
      </Header>
      <Slabs>
        <Link to={"/words"}>
          <Slab normal>
            <img src={Word} />
            {i18n.t("wordsText")}
          </Slab>
        </Link>

        <Link to={"/word"}>
          <Slab normal>
            <img src={Word} />
            {i18n.t("collectWord")}
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
            {i18n.t("collectPhrase")}
          </Slab>
        </Link>
      </Slabs>
    </Styled>
  );
};

export default PickGame;

const Slabs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 400px;
  width: fit-content;
  button {
    margin-bottom: 20px;
    margin-right: 10px;
  }
`;

const Styled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
