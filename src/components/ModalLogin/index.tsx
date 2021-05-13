import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Form, Input, Modal } from "antd";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import { app } from "../../base";
import i18n from "i18next";
import AppContext from "../../AppContext";
import { Span } from "../../ui/Span";
import { Paragraph } from "../../ui/Paragraph";
import { isMobile } from "react-device-detect";
import Google from "./google.svg";
import Facebook from "./Social.svg";
const ModalLogin = ({
  user,
  signInWithGoogle,
  signInWithEmailAndPassword,
  signInWithFacebook,
}: any) => {
  const { state, setState, modalLoginVisible, setModalVisible } = useContext(
    AppContext
  );

  const history = useHistory();

  const [email, setEmail] = useState("test@chamala.ru");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");
  const [show, setShow] = useState("login");

  useEffect(() => {
    if (user) {
      history.push("/user");
      setError("");
      setEmail("");
      setPassword("");
      setModalVisible(false);
    }
  }, [user]);

  const GoogleButton = () => {
    return (
      <img
        src={Google}
        onClick={() => {
          signInWithGoogle();
          setModalVisible(false);
          history.push("/user");
        }}
        style={{ fontSize: "32px", cursor: "pointer" }}
      />
    );
  };

  const FacebookButton = () => {
    return (
      <img
        src={Facebook}
        onClick={() => {
          signInWithFacebook();
          // setModalVisible(false);
          // history.push("/user");
        }}
        style={{ fontSize: "32px", cursor: "pointer" }}
      />
    );
  };

  const handleSubmit = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      setError("");
      history.push("/user");
      return user;
    } catch (error) {
      // console.log(error, "no login");
      setError("Error Signing up with email and password");
      // return "no";
    }
  };

  const createUserWithEmailAndPasswordHandler = async (values: any) => {
    try {
      return await app.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Ошибка при создании учетной записи, перепроверьте данные");
    }
  };

  const createUserViaEmail = (values: any) => {
    createUserWithEmailAndPasswordHandler(values).then((res) => {
      console.log(res);
      history.push("/user");
      setEmail("");
      setPassword("");
      setModalVisible(false);
    });
  };
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
    <Modal
      visible={modalLoginVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      footer={null}
      width={480}
      centered
    >
      <StyledLogin>
        {show === "login" ? (
          <>
            <Form
              onFinish={() => {
                handleSubmit().then((res: any) => {});
              }}
            >
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
              {/*<FacebookButton />*/}
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
        ) : null}
        {show === "reset" ? (
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
        ) : null}
        {show === "register" ? (
          <>
            <Form onFinish={createUserViaEmail}>
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
        ) : null}
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
