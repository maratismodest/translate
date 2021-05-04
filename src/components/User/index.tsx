import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import { Modal, Spin } from "antd";
import { initialState } from "../../localBase/base";
import i18n from "i18next";
import AppContext from "../../AppContext";
import Tukai from "./../../assets/tukai.png";
import styled from "styled-components";
import { StyledBody } from "../Welcome/WelcomeStyles";

const User = ({ user, signOut }: any) => {
  const { state, setState, app } = useContext(AppContext);
  const [stats, setStats] = useState(false);

  const [fileUrl, setFileUrl] = useState(null);
  const [db, setDb] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  useEffect(() => {
    console.log("fileUrl", fileUrl);
  }, [fileUrl]);

  async function updatePhoto(link: string) {
    try {
      const current = db[user.uid];

      const res = await axios.put(
        `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${user.uid}.json`,
        { ...current, avatar: link }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }

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

  const onFileChange = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const link = await fileRef.getDownloadURL();
    updatePhoto(link).then((res) => {
      setFileUrl(link);
      window.location.reload();
    });
  };

  return (
    <>
      <StyledUser>
        {/*<Text>Ваш ID: {user.uid}</Text>*/}
        <div>
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: 115,
              height: 115,
              margin: "0 auto",
            }}
          >
            {currentUser.avatar ? (
              <img src={currentUser.avatar} width={115} height={115} />
            ) : (
              <div>Нет изображения</div>
            )}
          </div>

          <Header level={2}>{user.displayName}</Header>
          <input type="file" onChange={onFileChange} />
        </div>

        <Buttons>
          <Button
            onClick={() => {
              setStats((prevState) => !prevState);
            }}
          >
            Статистика
          </Button>
          <Button onClick={showModal}>Настройки</Button>
          <Stats style={{ visibility: stats ? "visible" : "hidden" }}>
            <Text huge> Количество игр: {currentUser.count}</Text>
            <Text huge>
              Количество правильных ответов:{currentUser.correct}{" "}
            </Text>
            <Text huge>
              Количество неправильных ответов:{currentUser.mistake}{" "}
            </Text>
          </Stats>
        </Buttons>

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
        <div style={{ display: "inline-grid" }}>
          <Text huge>Тукай одобряет!</Text>
          <Text huge>Ваш уровень: {currentUser.level}</Text>
        </div>
        <Button small onClick={signOut}>
          Выйти
        </Button>
      </Modal>
    </>
  );
};
export default User;

const StyledUser = styled(StyledBody)``;
const Stats = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 13px rgba(3, 32, 4, 0.08);
  border-radius: 14px;
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
    text-align: left;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-bottom: 10px;
  }
`;
