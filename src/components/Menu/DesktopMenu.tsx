import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import i18n from "i18next";
import {
  phrasesLatEng,
  phrasesLatLat,
  phrasesTatRus,
  wordsLatEng,
  wordsLatLat,
  wordsTatRus,
} from "../../localBase/base";
import { useHistory } from "react-router-dom";
import AppContext from "../../AppContext";

const { SubMenu } = Menu;

export const DesktopMenu = ({ user }: any) => {
  const { state, setState } = useContext(AppContext);
  const [menuState, setMenuState] = useState({ current: "mail" });

  const history = useHistory();
  const handleClick = (e: any) => {
    console.log("click ", e);
    setMenuState({ current: e.key });
  };

  interface MenuInterface {
    text: string;
    cb: () => void;
    id?: string;
  }
  const LanguageMenuList: MenuInterface[] = [
    {
      text: "Русский",
      cb: () => {
        setState({
          ...state,
          language: "rus",
          firstLanguage: "tat",
          secondLanguage: "rus",
          words: wordsTatRus,
          phrases: phrasesTatRus,
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
          firstLanguage: "lat",
          secondLanguage: "eng",
          words: wordsLatEng,
          phrases: phrasesLatEng,
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
          words: wordsTatRus,
          phrases: phrasesTatRus,
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
          firstLanguage: "lat",
          secondLanguage: "lat",
          words: wordsLatLat,
          phrases: phrasesLatLat,
        });
        history.push("/");
      },
    },
  ];

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[menuState.current]}
      mode="horizontal"
      style={{ background: "none", border: "none" }}
    >
      <Menu.Item key="login" onClick={() => history.push("/login")}>
        {i18n.t("login")}
      </Menu.Item>
      <Menu.Item key="profile" onClick={() => history.push("/user")}>
        {i18n.t("profile")}
      </Menu.Item>
      <SubMenu key="languages" title={i18n.t("languages")}>
        {LanguageMenuList.map((item: any) => {
          const { text, cb } = item;
          return (
            <Menu.Item key={text} onClick={cb}>
              {text}
            </Menu.Item>
          );
        })}
        {/*<Menu.Item key="setting:1">Русский</Menu.Item>*/}
        {/*<Menu.Item key="setting:2">English</Menu.Item>*/}
        {/*<Menu.Item key="setting:3">Татарча</Menu.Item>*/}
        {/*<Menu.Item key="setting:4">Latin</Menu.Item>*/}
      </SubMenu>
      {/*<Menu.Item key="alipay">*/}
      {/*  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">*/}
      {/*    Navigation Four - Link*/}
      {/*  </a>*/}
      {/*</Menu.Item>*/}
    </Menu>
  );
};
