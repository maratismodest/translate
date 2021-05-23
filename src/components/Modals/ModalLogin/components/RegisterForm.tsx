import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Form, Input, Modal } from "antd";
import i18n from "i18next";
import { isMobile } from "react-device-detect";
import Google from "./GoogleButton/google.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppContext from "../../../../AppContext";
import { StyledBody } from "../../../Welcome/WelcomeStyles";
import { Button } from "../../../../ui/Button";
import { Text } from "../../../../ui/Text";
import { Span } from "../../../../ui/Span";
import { Paragraph } from "../../../../ui/Paragraph";
import { Header } from "../../../../ui";
import { LoginHeader, StyledInput, StyledLoginFooter } from "../index";
import { app } from "../../../../base";

export const RegisterForm = ({
  user,
  signInWithGoogle,
  signInWithEmailAndPassword,
  signInWithFacebook,
  setShow,
}: any) => {
  const { state, setState, modalLoginVisible, setModalVisible } = useContext(
    AppContext
  );

  const history = useHistory();

  type FormValues = {
    email: string;
    password: string;
  };

  const schema = yup.object().shape({
    email: yup.string().email("Укажите Email").required("Укажите Email"),
    password: yup.string().required("Укажите Пароль"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");

  const GoogleButton = () => {
    return (
      <img
        src={Google}
        onClick={() => {
          signInWithGoogle();
          setModalVisible(false);
          history.push("/user");
        }}
        width={46}
        style={{ cursor: "pointer" }}
      />
    );
  };

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;
    try {
      return await app.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Ошибка при создании учетной записи, перепроверьте данные");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginHeader color={"green"}>Регистрация</LoginHeader>
        <StyledInput {...register("email")} placeholder={i18n.t("login")} />
        <p>{errors.email?.message}</p>
        <StyledInput
          placeholder={i18n.t("password")}
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <Text large color={"red"} style={{ marginBottom: 10 }}>
          {error}
        </Text>
        <Button htmlType="submit">Зарегистрироваться</Button>
      </form>
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
