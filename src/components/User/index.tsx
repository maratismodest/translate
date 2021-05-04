import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Header from "../../ui/Header";
import Tukai from "../../assets/tukai.png";
import { Modal, Spin } from "antd";
import { initialState } from "../../localBase/base";
import i18n from "i18next";
const User = ({ user, signOut, state, setState }: any) => {
  const [db, setDb] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  async function getInfo() {
    try {
      const res = await axios.get(
        `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json`
      );
      return res;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async function addUser(id: string) {
    try {
      const updated = { count: 0, correct: 0, mistake: 0 };
      const res = await axios.put(
        `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`,
        updated
      );
      return res;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    getInfo().then((res) => {
      setDb(res.data);
    });
  }, []);

  if (!db) {
    return <Spin />;
  }
  if (!user) {
    history.push("/login");
    return null;
  }

  const currentUser = db[user.uid];
  if (!currentUser) {
    addUser(user.uid).then((res) => {
      console.log(res);
      window.location.reload();
      return null;
    });
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledUser>
        <Text>{user.displayName}</Text>
        {/*<Text>Ваш ID: {user.uid}</Text>*/}

        <Text>Количество игр: {currentUser.count}</Text>
        <Text>Количество правильных ответов:{currentUser.correct} </Text>
        <Text>Количество неправильных ответов:{currentUser.mistake} </Text>
        <hr />
        <Button onClick={showModal}>Настройки</Button>
        <Button onClick={showModal} style={{ alignSelf: "center" }}>
          Уровень
        </Button>
        <Link
          to={"/"}
          onClick={() => {
            setState({
              ...initialState,
              gameState: "welcome",
            });
          }}
        >
          <Text underline large>
            {i18n.t("mainPage")}
          </Text>
        </Link>
      </StyledUser>
      <Modal
        title="Ваш уровень"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="ОК"
        cancelText="Отмена"
        centered
      >
        <img src={Tukai} width={"100%"} />
        <Text huge>Тукай одобряет!</Text>
        <Text>Ваш уровень: {currentUser.level}</Text>
      </Modal>
    </>
  );
};
export default User;

const StyledUser = styled(StyledBody)``;
