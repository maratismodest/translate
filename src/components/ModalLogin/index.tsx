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
import { Span } from "../../ui/Span";
import { Paragraph } from "../../ui/Paragraph";
import { isMobile } from "react-device-detect";
import Google from "./google.svg";
const ModalLogin = ({
  user,
  signInWithGoogle,
  signInWithEmailAndPassword,
}: any) => {
  const { state, setState, modalLoginVisible, setModalVisible } = useContext(
    AppContext
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState("login");

  const history = useHistory();
  if (user) {
    history.push("/user");
    return null;
  }

  const GoogleButton = () => {
    return (
      <img
        src={Google}
        onClick={signInWithGoogle}
        style={{ fontSize: "32px", cursor: "pointer" }}
      />
    );
  };

  const Login = () => {
    const handleSubmit = async (values: any) => {
      try {
        const { user } = await signInWithEmailAndPassword(email, password);
        return user;
      } catch (error) {
        console.log(error);
        setError("Error Signing up with email and password");
      }
    };

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
            pointer
            bold
            style={{
              marginBottom: isMobile ? 10 : 20,
              marginTop: isMobile ? 10 : 20,
              maxWidth: 300,
              textAlign: "right",
            }}
            onClick={() => {
              setShow("reset");
            }}
          >
            {i18n.t("forgotPassword")}
          </Text>
          <Text
            large
            color={"red"}
            style={{ marginBottom: isMobile ? 10 : 30 }}
          >
            {error}
          </Text>

          <Button htmlType="submit">{i18n.t("login")}</Button>
        </Form>
        <StyledLoginFooter>
          <Span
            bold
            pointer
            style={{ marginBottom: isMobile ? 10 : 30, display: "flex" }}
          >
            или войти с помощью:
          </Span>
          <GoogleButton />
        </StyledLoginFooter>
        <Paragraph
          style={{ margin: isMobile ? "20px 0" : "30px 0" }}
          onClick={() => {
            setShow("register");
            setError("");
          }}
        >
          Нет аккаунта?{" "}
          <Span pointer bold>
            Зарегистрироваться
          </Span>
        </Paragraph>
      </>
    );
  };
  const Register = () => {
    const createUserWithEmailAndPasswordHandler = async (values: any) => {
      try {
        return await app.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setError("Ошибка при создании учетной записи, перепроверьте данные");
      }

      setEmail("");
      setPassword("");
    };
    return (
      <>
        <Form onFinish={createUserWithEmailAndPasswordHandler}>
          <LoginHeader color={"green"}>Регистрация</LoginHeader>
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
        <StyledLoginFooter>
          <Text style={{ marginBottom: isMobile ? 10 : 30 }}>
            или войти с помощью:
          </Text>
          <GoogleButton />
        </StyledLoginFooter>
        <Paragraph
          style={{ margin: isMobile ? "20px 0" : "30px 0" }}
          onClick={() => {
            setShow("login");
            setError("");
          }}
        >
          Есть аккаунт?{" "}
          <Span bold pointer>
            Войти
          </Span>
        </Paragraph>
      </>
    );
  };
  const Reset = () => {
    const sendResetEmail = (event: any) => {
      app
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setTimeout(() => {}, 3000);
        })
        .catch(() => {
          setError("Error resetting password");
        });
    };

    return (
      <>
        <Form onFinish={sendResetEmail}>
          <LoginHeader color={"green"}>Сбросить пароль</LoginHeader>
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
        <StyledLoginFooter>
          <Text style={{ marginBottom: isMobile ? 10 : 30 }}>
            или войти с помощью:
          </Text>
          <GoogleButton />
        </StyledLoginFooter>
        <Paragraph
          style={{ margin: isMobile ? "20px 0" : "30px 0" }}
          onClick={() => {
            setShow("login");
            setError("");
          }}
        >
          Вспомнили пароль?{" "}
          <Span bold pointer>
            Войти
          </Span>
        </Paragraph>
      </>
    );
  };
  return (
    <Modal
      visible={modalLoginVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      footer={null}
      width={480}
      centered
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
`;

const StyledLoginFooter = styled.div`
  margin-top: 30px !important;
  @media (max-width: 1024px) {
    margin-top: 20px !important;
  }
`;

const LoginHeader = styled(Header)`
  margin-bottom: 80px !important;
  @media (max-width: 1024px) {
    margin-bottom: 30px !important;
  }
`;
