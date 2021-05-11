import React from "react";
import { isMobile } from "react-device-detect";
import MobileMenu from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { slide as Menu } from "react-burger-menu";

export default ({ user }: any) => {
  const showSettings = () => {
    console.log("test");
  };
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};
// isMobile ? <MobileMenu user={user} /> : <DesktopMenu />;
