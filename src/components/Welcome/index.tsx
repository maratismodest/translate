import React from "react";
import { Link } from "react-router-dom";
import Logo from "./welcome.svg";
import {
  MobileWelcome,
  MobileWelcomeWallPaper,
  DesktopWelcome,
  DesktopWelcomeBegin,
  DesktopWelcomeWallPaper,
} from "./WelcomeStyles";
import i18n from "i18next";
import Header from "../../ui/Header";
import { isMobile } from "react-device-detect";
import { Button } from "../../ui/Button";

const Desktop = () => {
  console.log("Desktop");
  return (
    <DesktopWelcome>
      <DesktopWelcomeWallPaper>
        <img src={Logo} alt="Chamala" width="100%" />
      </DesktopWelcomeWallPaper>
      <DesktopWelcomeBegin>
        <Header level={1} className={"mb-68 ft-36"}>
          {i18n.t("welcomeText")}
        </Header>
        <Link to={"/pickgame"}>
          <Button>{i18n.t("start")}</Button>
        </Link>
      </DesktopWelcomeBegin>
    </DesktopWelcome>
  );
};
const Welcome = () => {
  if (isMobile) {
    return (
      <MobileWelcome>
        <Header level={2}>{i18n.t("welcomeText")}</Header>
        <MobileWelcomeWallPaper>
          <img src={Logo} alt="Chamala" width="100%" />
        </MobileWelcomeWallPaper>
        <Link to={"/pickgame"}>
          <Button>{i18n.t("start")}</Button>
        </Link>
      </MobileWelcome>
    );
  }
  return <Desktop />;
};

export default Welcome;
