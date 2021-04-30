import { Divider } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactLogo from "./welcome.svg";
import {
  Buttons,
  StyledHeader,
  StyledWallPaper,
  StyledWelcome,
  StyledWelcomeMenu,
} from "./WelcomeStyles";
import i18n from "i18next";
import Button from "../../ui/Button";

import AppContext from "../../AppContext";
import { initialState } from "../../localBase/base";
import { Spin } from "antd";

const Welcome = () => {
  const { state, setState } = useContext(AppContext);
  if (!state) {
    return <Spin />;
  }

  const handleWordsButton = () => {
    setState({
      ...initialState,
      chosenGame: "words",
      gameState: "words",
    });
  };
  const handlePhrasesButton = () => {
    setState({
      ...initialState,
      chosenGame: "phrases",
      gameState: "phrases",
    });
  };
  const handleDragAndDropButton = () => {
    setState({
      ...initialState,
      chosenGame: "collect",
      gameState: "collect",
    });
  };
  return (
    <StyledWelcome>
      <StyledWallPaper>
        <img src={ReactLogo} alt="Chamala" width="100%" />
      </StyledWallPaper>
      <StyledWelcomeMenu>
        <StyledHeader>{i18n.t("welcomeText")}</StyledHeader>

        <Buttons>
          <Link to={"/words"}>
            <Button onClick={handleWordsButton}>{i18n.t("wordsText")}</Button>
          </Link>
          <Divider />
          <Link to={"/phrases"}>
            <Button onClick={handlePhrasesButton}>{i18n.t("phrases")}</Button>
          </Link>
          <Divider />
          <Link to={"/collect"}>
            <Button onClick={handleDragAndDropButton}>
              {i18n.t("dragAndDrop")}
            </Button>
          </Link>
        </Buttons>
      </StyledWelcomeMenu>
    </StyledWelcome>
  );
};

export default Welcome;
