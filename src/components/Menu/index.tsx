import React, { useContext } from "react";
import { Dropdown, Menu } from "antd";
import {
  phrasesEngTat,
  phrasesTatRus,
  wordsTatEng,
  wordsTatRus,
} from "../../localBase/base";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import i18n from "i18next";
import AppContext from "../../AppContext";
import "./styles.scss";
import {
  AppstoreOutlined,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Icon from "../../ui/Icon";

const { SubMenu } = Menu;

export default ({ user }: any) => {
  const { state, setState } = useContext(AppContext);
  const history = useHistory();
  const menu = (
    <Menu style={{ textAlign: "center" }}>
      <MenuItem key="0" icon={<LoginOutlined />}>
        {user ? (
          <a
            onClick={(e) => {
              e.preventDefault();
              history.push("/user");
            }}
          >
            {i18n.t("user")}
          </a>
        ) : (
          <a
            onClick={(e) => {
              e.preventDefault();
              history.push("/login");
            }}
          >
            {i18n.t("login")}
          </a>
        )}
      </MenuItem>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Язык">
        <MenuItem key="1">
          <a
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                language: "rus",
                words: wordsTatRus,
                phrases: phrasesTatRus,
                firstLanguage: "rus",
                secondLanguage: "tat",
              });
              history.push("/");
            }}
          >
            RU
          </a>
        </MenuItem>
        <MenuItem key="2">
          <a
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                language: "tat",
                words: wordsTatRus,
                phrases: phrasesTatRus,
                firstLanguage: "tat",
                secondLanguage: "rus",
              });
              history.push("/");
            }}
          >
            TA
          </a>
        </MenuItem>
        <MenuItem key="3">
          <a
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                language: "eng",
                words: wordsTatEng,
                phrases: phrasesEngTat,
                firstLanguage: "eng",
                secondLanguage: "tat",
              });
              history.push("/");
            }}
          >
            EN
          </a>
        </MenuItem>
        <MenuItem key="4">
          <a
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                language: "lat",
                words: wordsTatEng,
                phrases: phrasesEngTat,
                firstLanguage: "eng",
                secondLanguage: "tat",
              });
              history.push("/");
            }}
          >
            LA
          </a>
        </MenuItem>
      </SubMenu>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <MenuOutlined style={{ fontSize: "24px" }} />
    </Dropdown>
  );
};

const MenuItem = styled(Menu.Item)`
  padding: 10px;
  min-width: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`;
