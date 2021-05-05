import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Input } from "antd";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import { app } from "../../base";
import { GoogleOutlined } from "@ant-design/icons";

const Login = ({ user, signInWithGoogle, signInWithEmailAndPassword }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState("login");
  console.log("user", user);
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

  useEffect(() => {
    getInfo().then((res) => {
      console.log(res);
    });
  }, []);

  useEffect(() => {
    if (user) {
      history.push("/user");
    }
  }, [user]);

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

  return (
    <StyledLogin>
      {show === "login" ? (
        <>
          <Form onFinish={handleSubmit}>
            <Header style={{ marginBottom: 30 }}>Вход</Header>
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
            <Text
              style={{ marginBottom: 30 }}
              onClick={() => {
                setShow("reset");
              }}
            >
              Забыли пароль?
            </Text>
            <Text large color={"red"} style={{ marginBottom: 10 }}>
              {error}
            </Text>
            <Button htmlType="submit">Войти</Button>
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
      ) : null}

      {show === "reset" ? (
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
      ) : null}

      {show === "register" ? (
        <>
          <Form onFinish={createUserWithEmailAndPasswordHandler}>
            <Header style={{ marginBottom: 30 }}>Регистрация</Header>
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
      ) : null}
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled(StyledBody)`
  color: #718ccc;
  display: flex;
  width: min-content;
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
