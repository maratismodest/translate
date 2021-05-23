import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input, Modal } from "antd";
import Google from "./google.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppContext from "../../../AppContext";
import { Header } from "../../../ui";
import { StyledBody } from "../../Welcome/WelcomeStyles";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { ResetForm } from "./components/ResetForm";

const ModalLogin = (props: any) => {
  const { user, signInWithGoogle } = props;
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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState("login");

  useEffect(() => {
    if (user) {
      setModalVisible(false);
    }
  }, [user]);

  // const handleSubmitOld = async () => {
  //   try {
  //     const { user } = await signInWithEmailAndPassword(email, password);
  //     return user;
  //   } catch (error) {
  //     setError("Error Signing up with email and password");
  //   }
  // };

  // const createUserWithEmailAndPasswordHandler = async (values: any) => {
  //   try {
  //     return await app.auth().createUserWithEmailAndPassword(email, password);
  //   } catch (error) {
  //     setError("Ошибка при создании учетной записи, перепроверьте данные");
  //   }
  // };

  // const createUserViaEmail = (values: any) => {
  //   createUserWithEmailAndPasswordHandler(values).then((res) => {
  //     console.log(res);
  //     history.push("/user");
  //     setEmail("");
  //     setPassword("");
  //     setModalVisible(false);
  //   });
  // };
  // const sendResetEmail = (event: any) => {
  //   app
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       setTimeout(() => {}, 3000);
  //     })
  //     .catch(() => {
  //       setError("Error resetting password");
  //     });
  // };
  const onSubmit = (data: any) => console.log(data);

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
          <LoginForm show={show} setShow={setShow} {...props} />
        ) : null}
        {show === "register" ? (
          <RegisterForm show={show} setShow={setShow} {...props} />
        ) : null}
        {show === "reset" ? (
          <ResetForm show={show} setShow={setShow} {...props} />
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

export const StyledInput = styled(Input)`
  background: rgba(92, 92, 92, 0.05);
  border: 1px solid rgba(11, 65, 12, 0.2);
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;
`;

export const StyledLoginFooter = styled.div`
  margin-top: 30px !important;
  @media (max-width: 1024px) {
    margin-top: 20px !important;
  }
`;

export const LoginHeader = styled(Header)`
  margin-bottom: 80px !important;
  @media (max-width: 1024px) {
    margin-bottom: 30px !important;
  }
`;
