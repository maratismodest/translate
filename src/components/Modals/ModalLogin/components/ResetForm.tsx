import React, { useState } from "react";
import i18n from "i18next";
import { isMobile } from "react-device-detect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../ui/Button";
import { Text } from "../../../../ui/Text";
import { Span } from "../../../../ui/Span";
import { Paragraph } from "../../../../ui/Paragraph";
import { LoginHeader, StyledInput, StyledLoginFooter } from "../index";
import { app } from "../../../../base";
import { GoogleButton } from "./GoogleButton";

export const ResetForm = ({ signInWithGoogle, setShow }: any) => {
  type FormValues = {
    email: string;
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

  const onSubmit = (data: FormValues) => {
    const { email } = data;
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginHeader color={"green"}>Сбросить пароль</LoginHeader>
        <StyledInput placeholder={i18n.t("email")} {...register("email")} />
        <p>{errors.email?.message}</p>

        <Text large color={"red"} style={{ marginBottom: 10 }}>
          {error}
        </Text>
        <Button htmlType="submit">Сбросить</Button>
      </form>
      <StyledLoginFooter>
        <Text style={{ marginBottom: isMobile ? 10 : 30 }}>
          или войти с помощью:
        </Text>
        <GoogleButton signInWithGoogle={signInWithGoogle} />
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
