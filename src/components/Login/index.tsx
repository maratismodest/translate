import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Typography, Space } from "antd";
import GoogleButton from "react-google-button";
import { StyledBody } from "../Welcome/WelcomeStyles";

const { Text, Link } = Typography;
const Login = ({ user, signInWithGoogle }: any) => {
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

  return (
    <StyledLogin>
      <p>Войти</p>
      {/*<Button onClick={signInWithGoogle}>Google</Button>*/}
      <GoogleButton label="Чамала!" onClick={signInWithGoogle} />
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
