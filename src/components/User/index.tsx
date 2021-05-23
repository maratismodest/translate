import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import { Modal, Spin } from "antd";
import { initialState } from "../../localBase/base";
import i18n from "i18next";
import AppContext from "../../AppContext";
import Tukai from "./../../assets/tukai.png";
import styled from "styled-components";
import { StyledBody } from "../Welcome/WelcomeStyles";
import { getInfo } from "../../api";
import { push } from "react-burger-menu";
import { Button } from "../../ui/Button";
const Compress = require("compress.js");

const User = ({ user, signOut }: any) => {
  const compress = new Compress();
  const { state, setState, app } = useContext(AppContext);
  const [stats, setStats] = useState(true);
  const storageRef = app.storage().ref();
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

  async function addUser(id: string) {
    try {
      const updated = {
        count: 0,
        correct: 0,
        mistake: 0,
        avatar: "https://chamala.ru/static/media/tukai.361b9ae4.png",
      };
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
      setDb(res);
    });
  }, []);

  if (!db) {
    return (
      <StyledBody>
        <Spin />
      </StyledBody>
    );
  }
  if (!user && db) {
    return (
      <StyledBody>
        <Spin />
      </StyledBody>
    );
  }

  const currentUser = db[user.uid];

  if (!currentUser) {
    addUser(user.uid).then((res) => {
      return window.location.reload();
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

  async function resizeImageFn(file: any) {
    const resizedImage = await compress.compress([file], {
      size: 2, // the max size in MB, defaults to 2MB
      quality: 1, // the quality of the image, max is 1,
      maxWidth: 300, // the max width of the output image, defaults to 1920px
      maxHeight: 300, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    });
    const img = resizedImage[0];
    const base64str = img.data;
    const imgExt = img.ext;
    const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt);
    return resizedFiile;
  }

  const onFileChange = async (e: any) => {
    const res = await resizeImageFn(e.target.files[0]);
    console.log(res);
    const file = e.target.files[0];
    const fileRef = storageRef.child(file.name);
    await fileRef.put(res);
    const link = await fileRef.getDownloadURL();
    console.log("link", link);
    updatePhoto(link).then((res) => {
      setFileUrl(link);
      window.location.reload();
    });
  };

  const handleClick = () => {
    const upload = document.getElementById("upload");
    console.log(upload);
    if (upload) {
      upload.click();
    }
  };

  return (
    <>
      <StyledUser>
        <div>
          <Avatar onClick={handleClick}>
            {currentUser.avatar ? (
              <img src={currentUser.avatar} width={115} height={115} />
            ) : (
              <div>Нет изображения</div>
            )}
          </Avatar>

          <Header level={2}>{user.displayName}</Header>
          <input id="upload" type="file" onChange={onFileChange} hidden />
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
        <Button
          small
          onClick={() => {
            signOut();
            history.push("/");
          }}
        >
          Выйти
        </Button>
      </Modal>
    </>
  );
};
export default User;

const StyledUser = styled(StyledBody)``;

const Avatar = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  overflow: hidden;
  width: 115px;
  height: 115px;
  margin: 0 auto;
  margin-bottom: 24px;
  img {
    object-fit: cover;
    object-position: center;
  }
  &:hover {
    opacity: 0.5;
  }
`;
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
  margin-top: 16px;
  button {
    margin-bottom: 10px;
  }
`;
