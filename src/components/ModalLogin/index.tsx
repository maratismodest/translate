import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Form, Input, Modal } from "antd";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import { app } from "../../base";
import { GoogleOutlined } from "@ant-design/icons";
import i18n from "i18next";
import AppContext from "../../AppContext";
import { isMobile } from "react-device-detect";
const ModalLogin = ({
  user,
  signInWithGoogle,
  signInWithEmailAndPassword,
}: any) => {
  const { state, setState, modalLoginVisible, setModalVisible } = useContext(
    AppContext
  );

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState("login");

  const history = useHistory();
  if (user) {
    history.push("/user");
    return null;
  }

  const handleSubmit = async (values: any) => {
    console.log(email, password);
    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log(error);
      setError("Error Signing up with email and password");
    }
  };

  const createUserWithEmailAndPasswordHandler = async (values: any) => {
    try {
      return await app.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Ошибка при создании учетной записи, перепроверьте данные");
    }

    setEmail("");
    setPassword("");
  };

  const sendResetEmail = (event: any) => {
    app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // setEmailHasBeenSent(true);
        setTimeout(() => {
          // setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  const Login = () => {
    return (
      <>
        <Form onFinish={handleSubmit}>
          <LoginHeader color={"green"}>{i18n.t("login")}</LoginHeader>
          <StyledInput
            value={email}
            placeholder={i18n.t("login")}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
          <StyledInput
            value={password}
            placeholder={i18n.t("password")}
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
          <Text
            style={{ marginBottom: 30 }}
            onClick={() => {
              setShow("reset");
            }}
          >
            {i18n.t("forgotPassword")}
          </Text>
          <Text large color={"red"} style={{ marginBottom: 10 }}>
            {error}
          </Text>
          <Button htmlType="submit">{i18n.t("login")}</Button>
        </Form>
        <div style={{ marginTop: 10 }}>
          <Text>или войти с помощью:</Text>
          <GoogleOutlined
            onClick={signInWithGoogle}
            style={{ fontSize: "32px" }}
          />
        </div>
        <Text
          style={{ margin: "auto 0" }}
          onClick={() => {
            setShow("register");
          }}
        >
          Нет аккаунта? Зарегистрироваться
        </Text>
      </>
    );
  };
  const Register = () => {
    return (
      <>
        <Form onFinish={createUserWithEmailAndPasswordHandler}>
          <Header style={{ marginBottom: 80 }}>Регистрация</Header>
          <StyledInput
            value={email}
            placeholder={"Логин"}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
          <StyledInput
            value={password}
            placeholder={"Пароль"}
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />

          <Text large color={"red"} style={{ marginBottom: 10 }}>
            {error}
          </Text>
          <Button htmlType="submit">Зарегистрироваться</Button>
        </Form>
        <div style={{ marginTop: 10 }}>
          <Text>или войти с помощью:</Text>
          <GoogleOutlined
            onClick={signInWithGoogle}
            style={{ fontSize: "32px" }}
          />
        </div>
        <Text
          style={{ margin: "auto 0" }}
          onClick={() => {
            setShow("login");
          }}
        >
          Есть аккаунт? Войти
        </Text>
      </>
    );
  };
  const Reset = () => {
    return (
      <>
        <Form onFinish={sendResetEmail}>
          <Header style={{ marginBottom: 30 }}>Сбросить пароль</Header>
          <StyledInput
            value={email}
            placeholder={"Логин"}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />

          <Text large color={"red"} style={{ marginBottom: 10 }}>
            {error}
          </Text>
          <Button htmlType="submit">Сбросить</Button>
        </Form>
        <div style={{ marginTop: 10 }}>
          <Text>или войти с помощью:</Text>
          <GoogleOutlined
            onClick={signInWithGoogle}
            style={{ fontSize: "32px" }}
          />
        </div>
        <Text
          style={{ margin: "auto 0" }}
          onClick={() => {
            setShow("login");
          }}
        >
          Вспомнили пароль? Войти
        </Text>
      </>
    );
  };
  return (
    <Modal
      visible={modalLoginVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={480}
      centered
      bodyStyle={{ height: 500 }}
    >
      <StyledLogin>
        {show === "login" ? <Login /> : null}
        {show === "reset" ? <Reset /> : null}
        {show === "register" ? <Register /> : null}
      </StyledLogin>
    </Modal>
  );
};
export default ModalLogin;

const StyledLogin = styled(StyledBody)`
  color: #718ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledInput = styled(Input)`
  background: rgba(92, 92, 92, 0.05);
  border: 1px solid rgba(11, 65, 12, 0.2);
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;
  max-width: 300px;
`;

const LoginHeader = styled(Header)`
  margin-bottom: 80px !important;
  //isMobile {
  //  margin-bottom: 30px !important;
  //}
`;
