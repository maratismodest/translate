import { Divider } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactLogo from "./welcome.svg";
import {
  WelcomeButtons,
  WelcomeHeader,
  WelcomeWallPaper,
  StyledWelcome,
  WelcomeMenu,
} from "./WelcomeStyles";
import i18n from "i18next";
import Button from "../../ui/Button";
import AppContext from "../../AppContext";
import { Spin } from "antd";

const Welcome = () => {
  const { state, setState } = useContext(AppContext);
  if (!state) {
    return <Spin />;
  }
  return (
    <StyledWelcome>
      <WelcomeWallPaper>
        <img src={ReactLogo} alt="Chamala" width="100%" />
      </WelcomeWallPaper>
      <WelcomeMenu>
        <WelcomeHeader>{i18n.t("welcomeText")}</WelcomeHeader>

        <WelcomeButtons>
          <Link to={"/words"}>
            <Button>{i18n.t("wordsText")}</Button>
          </Link>
          <Divider />
          <Link to={"/word"}>
            <Button>Собери слово</Button>
          </Link>
          <Divider />
          <Link to={"/phrases"}>
            <Button>{i18n.t("phrases")}</Button>
          </Link>
          <Divider />
          <Link to={"/collect"}>
            <Button>Собери фразу</Button>
          </Link>
        </WelcomeButtons>
      </WelcomeMenu>
    </StyledWelcome>
  );
};

export default Welcome;
