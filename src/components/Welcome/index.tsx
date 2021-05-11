import React from "react";
import { Link } from "react-router-dom";
import Logo from "./welcome.svg";
import {
  StyledWelcome,
  WelcomeWallPaper,
  DesktopWelcome,
  DesktopWelcomeWallPaper,
} from "./WelcomeStyles";
import i18n from "i18next";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import "./classes.scss";

const Desktop = () => {
  console.log("Desktop");
  return (
    <DesktopWelcome>
      <DesktopWelcomeWallPaper>
        <img src={Logo} alt="Chamala" width="100%" />
      </DesktopWelcomeWallPaper>
      <div>
        <Header level={1} className={"mb-40"}>
          {i18n.t("welcomeText")}
        </Header>
        <Link to={"/pickgame"}>
          <Button>{i18n.t("start")}</Button>
        </Link>
      </div>
    </DesktopWelcome>
  );
};
const Welcome = () => {
  if (isMobile) {
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
  }
  return <Desktop />;
};

export default Welcome;
