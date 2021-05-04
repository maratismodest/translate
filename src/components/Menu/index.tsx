import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../../AppContext";
import "./styles.scss";
import { MenuOutlined } from "@ant-design/icons";

import Text from "../../ui/Text";
import Icon from "../../ui/Icon";

export default ({ user }: any) => {
  const history = useHistory();
  const { state, setState } = useContext(AppContext);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);
  const [languageVisible, setLanguageVisible] = useState(false);

  const MainMenuList: MenuInterface[] = [
    {
      text: "На главную",
      cb: () => {
        history.push("/");
      },
    },
    {
      text: user ? "Профиль" : "Логин",
      cb: () => {
        history.push(user ? "/user" : "/login");
      },
    },
    {
      text: "Языки",
      cb: () => {
        console.log("test");
        setLanguageVisible(true);
      },
    },
  ];

  const LanguageMenuList: MenuInterface[] = [
    {
      text: "Русский",
      cb: () => {
        setState({
          ...state,
          language: "rus",
          firstLanguage: "tat",
          secondLanguage: "rus",
        });
        history.push("/");
      },
    },
    {
      text: "English",
      cb: () => {
        setState({
          ...state,
          language: "eng",
          firstLanguage: "tat",
          secondLanguage: "eng",
        });
        history.push("/");
      },
    },
    {
      text: "Татарча",
      cb: () => {
        setState({
          ...state,
          language: "tat",
          firstLanguage: "tat",
          secondLanguage: "rus",
        });
        history.push("/");
      },
    },
    {
      text: "Latin",
      cb: () => {
        setState({
          ...state,
          language: "lat",
          firstLanguage: "tat",
          secondLanguage: "rus",
        });
        history.push("/");
      },
    },
  ];

  return (
    <>
      <MenuOutlined
        style={{ fontSize: 24 }}
        onClick={() => {
          console.log("cb");
          setMainMenuVisible(true);
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
    </>
  );
};

interface MenuInterface {
  text: string;
  cb: () => void;
}

interface StyledMenuInterface {
  arr: MenuInterface[];
  visible: boolean;
  setVisible: any;
  user?: any;
}

const StyledMenu = ({ arr, setVisible }: StyledMenuInterface) => {
  const res = arr.map((item, index) => {
    const { text, cb } = item;
    return (
      <li
        key={index}
        style={{
          marginBottom: 16,
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
    <Styled>
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
