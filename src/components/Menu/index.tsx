import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";
import AppContext from "../../AppContext";
import "./styles.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import Text from "../../ui/Text";

const { SubMenu } = Menu;

const MainMenuList: MenuInterface[] = [
  {
    text: "Логин",
    link: "/login",
    cb: () => {
      console.log("1");
    },
  },
  {
    text: "Профиль",
    link: "/user",
    cb: () => {
      console.log("2");
    },
  },
  {
    text: "Языки",
    link: "",
    cb: () => {
      console.log("2");
    },
  },
];

const LanguageMenuList: MenuInterface[] = [
  {
    text: "RU",
    link: "/russian",
    cb: () => console.log("test"),
  },
  {
    text: "EN",
    link: "/russian",
    cb: () => {
      console.log("1");
    },
  },
  {
    text: "TA",
    link: "/tatar",
    cb: () => {
      console.log("2");
    },
  },
  {
    text: "LA",
    link: "",
    cb: () => {
      console.log("2");
    },
  },
];

export default ({ user }: any) => {
  const { state, setState } = useContext(AppContext);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);

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
    </>
  );
};

interface MenuInterface {
  text: string;
  link: string;
  cb: () => void;
}

interface StyledMenuInterface {
  arr: MenuInterface[];
  visible: boolean;
  setVisible: any;
  user?: any;
}

const StyledMenu = ({
  arr,
  visible,
  setVisible,
  user,
}: StyledMenuInterface) => {
  const res = arr.map((item, index) => {
    console.log("item", item);
    const { text, link, cb } = item;
    return (
      <li
        key={index}
        style={{
          marginBottom: 16,
        }}
      >
        <Link to={link}>
          <Text
            large
            onClick={() => {
              setVisible(false);
            }}
          >
            {text}
          </Text>
        </Link>
      </li>
    );
  });
  return (
    <Styled>
      <ul>{res}</ul>
      <Close>
        <CloseOutlined
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
  right: 10px;
  top: 10px;
`;
const Styled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 200px;
  width: 200px;
  background: #faf8f8;
  box-shadow: 0px 5px 13px rgba(3, 32, 4, 0.1);
  border-radius: 0 0 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// import React, { useContext } from "react";
// import { Dropdown, Menu } from "antd";
// import {
//   phrasesEngTat,
//   phrasesTatRus,
//   wordsTatEng,
//   wordsTatRus,
// } from "../../localBase/base";
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import i18n from "i18next";
// import AppContext from "../../AppContext";
// import "./styles.scss";
// import {
//   AppstoreOutlined,
//   LoginOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
//
// const { SubMenu } = Menu;
//
// export default ({ user }: any) => {
//   const { state, setState } = useContext(AppContext);
//   const history = useHistory();
//   const menu = (
//     <Menu style={{ textAlign: "center" }}>
//       <MenuItem key="0" icon={<LoginOutlined />}>
//         {user ? (
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               history.push("/user");
//             }}
//           >
//             {i18n.t("user")}
//           </a>
//         ) : (
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               history.push("/login");
//             }}
//           >
//             {i18n.t("login")}
//           </a>
//         )}
//       </MenuItem>
//       <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Язык">
//         <MenuItem key="1">
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               setState({
//                 ...state,
//                 language: "rus",
//                 words: wordsTatRus,
//                 phrases: phrasesTatRus,
//                 firstLanguage: "rus",
//                 secondLanguage: "tat",
//               });
//               history.push("/");
//             }}
//           >
//             RU
//           </a>
//         </MenuItem>
//         <MenuItem key="2">
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               setState({
//                 ...state,
//                 language: "tat",
//                 words: wordsTatRus,
//                 phrases: phrasesTatRus,
//                 firstLanguage: "tat",
//                 secondLanguage: "rus",
//               });
//               history.push("/");
//             }}
//           >
//             TA
//           </a>
//         </MenuItem>
//         <MenuItem key="3">
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               setState({
//                 ...state,
//                 language: "eng",
//                 words: wordsTatEng,
//                 phrases: phrasesEngTat,
//                 firstLanguage: "eng",
//                 secondLanguage: "tat",
//               });
//               history.push("/");
//             }}
//           >
//             EN
//           </a>
//         </MenuItem>
//         <MenuItem key="4">
//           <a
//             oncb={(e) => {
//               e.preventDefault();
//               setState({
//                 ...state,
//                 language: "lat",
//                 words: wordsTatEng,
//                 phrases: phrasesEngTat,
//                 firstLanguage: "eng",
//                 secondLanguage: "tat",
//               });
//               history.push("/");
//             }}
//           >
//             LA
//           </a>
//         </MenuItem>
//       </SubMenu>
//     </Menu>
//   );
//
//   return (
//     <Dropdown overlay={menu} trigger={["cb"]}>
//       <MenuOutlined style={{ fontSize: 24 }} />
//     </Dropdown>
//   );
// };

const MenuItem = styled(Menu.Item)`
  padding: 10px;
  min-width: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`;

// border-radius: 5px 10px 15px 20px;
