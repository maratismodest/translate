import { Menu } from "antd";
import { useContext, useState } from "react";
import i18n from "i18next";
import { useHistory } from "react-router-dom";
import AppContext from "../../AppContext";
import "./styles.scss";

const { SubMenu } = Menu;

export const DesktopMenu = ({ user, LanguageMenuList }: any) => {
  const { state, setState, setModalVisible } = useContext(AppContext);
  const [menuState, setMenuState] = useState({ current: "mail" });
  const history = useHistory();
  const handleClick = (e: any) => {
    setMenuState({ current: e.key });
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[menuState.current]}
      mode="horizontal"
      style={{ background: "none", border: "none" }}
    >
      <Menu.Item key="login" onClick={() => setModalVisible(true)}>
        {i18n.t("login")}
      </Menu.Item>
      <Menu.Item key="profile" onClick={() => history.push("/user")}>
        {i18n.t("profile")}
      </Menu.Item>
      <SubMenu
        key="languages"
        title={i18n.t("languages")}
        popupClassName="popupSubMenu"
      >
        {LanguageMenuList.map((item: any) => {
          const { text, cb } = item;
          return (
            <Menu.Item key={text} onClick={cb}>
              {text}
            </Menu.Item>
          );
        })}
      </SubMenu>
    </Menu>
  );
};
