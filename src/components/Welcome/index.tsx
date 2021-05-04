import React from "react";
import { Link } from "react-router-dom";
import Logo from "./welcome.svg";
import { StyledWelcome, WelcomeWallPaper } from "./WelcomeStyles";
import i18n from "i18next";
import Button from "../../ui/Button";
import Header from "../../ui/Header";

import "./classes.scss";
const Welcome = () => {
  return (
    <StyledWelcome>
      <Header level={2}>{i18n.t("welcomeText")}</Header>
      <WelcomeWallPaper>
        <img src={Logo} alt="Chamala" width="100%" />
      </WelcomeWallPaper>
      <Link to={"/pickgame"}>
        <Button>{i18n.t("start")}</Button>
      </Link>
    </StyledWelcome>
  );
};

export default Welcome;
