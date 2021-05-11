import React from "react";
import { isMobile } from "react-device-detect";
import MobileMenu from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export default ({ user }: any) =>
  isMobile ? <MobileMenu user={user} /> : <DesktopMenu />;
