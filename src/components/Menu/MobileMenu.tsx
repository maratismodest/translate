import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../AppContext";
import "./styles.scss";
import { MenuOutlined } from "@ant-design/icons";

import Text from "../../ui/Text";
import Icon from "../../ui/Icon";
import i18n from "i18next";
import { MenuInterface, StyledMenuInterface } from "./menuBase";

export default ({ user, LanguageMenuList }: any) => {
  const history = useHistory();
  const { state, setState } = useContext(AppContext);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);
  const [languageVisible, setLanguageVisible] = useState(false);

  document.addEventListener("click", function (e: any) {
    console.log(e.target.closest("#languages"));
    const languages = e.target.closest("#languages");
    if (languages) {
      return;
    }
    if (mainMenuVisible || languageVisible) {
      const menu = e.target.closest("#menu");
      if (!menu) {
        setMainMenuVisible(false);
        setLanguageVisible(false);
      }
    }
    return;
  });

  const MainMenuList: MenuInterface[] = [
    {
      text: i18n.t("home"),
      cb: () => {
        history.push("/");
      },
    },
    {
      text: user ? i18n.t("profile") : i18n.t("login"),
      cb: () => {
        history.push(user ? "/user" : "/login");
      },
    },
    {
      text: i18n.t("languages"),
      id: "languages",
      cb: () => {
        setLanguageVisible(true);
      },
    },
  ];

  return (
    <div id="menu">
      <MenuOutlined
        style={{ fontSize: 24 }}
        onClick={() => {
          setMainMenuVisible(true);
          setState({ ...state, menuClosed: false });
        }}
      />
      {mainMenuVisible ? (
        <StyledMenu
          arr={MainMenuList}
          visible={mainMenuVisible}
          setVisible={setMainMenuVisible}
        />
      ) : null}
      {languageVisible ? (
        <StyledMenu
          arr={LanguageMenuList}
          visible={languageVisible}
          setVisible={setLanguageVisible}
        />
      ) : null}
    </div>
  );
};

const StyledMenu = ({ arr, setVisible }: StyledMenuInterface) => {
  const res = arr.map((item, index) => {
    const { text, cb, id } = item;
    return (
      <li
        id={id ? id : undefined}
        style={{
          marginBottom: 16,
          cursor: "pointer",
        }}
      >
        <Text
          huge
          onClick={() => {
            setVisible(false);
            cb();
          }}
        >
          {text}
        </Text>
      </li>
    );
  });
  return (
    <Styled className={"menu"}>
      <ul>{res}</ul>
      <Close>
        <Icon
          icon={"close"}
          siz={32}
          onClick={() => {
            setVisible(false);
          }}
        />
      </Close>
    </Styled>
  );
};

const Close = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const Styled = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 0;
  min-height: 350px;
  width: 300px;
  max-width: 80%;
  background: #ffffff;
  box-shadow: 0px 5px 13px rgba(3, 32, 4, 0.1);
  border-radius: 0 0 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
