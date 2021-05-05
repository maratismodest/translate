import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Typography } from "antd";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import { app } from "../../base";

const { Text, Link } = Typography;
const Login = ({ user, signInWithGoogle, signInWithEmailAndPassword }: any) => {
  const [email, setEmail] = useState("test@test.ru");
  const [password, setPassword] = useState("12345678");
  const [displayName, setDisplayName] = useState("Marat");
  const [error, setError] = useState("");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPasswordHandler = async (
    event: any,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    try {
      const { user } = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          onChange={(event: any) => {
            setPassword(event.target.value);
          }}
        />
        <button type={"submit"}>OK</button>
      </form>

      <form className="">
        <label htmlFor="displayName" className="block">
          Display Name:
        </label>
        <input
          type="text"
          className="my-1 p-1 w-full "
          name="displayName"
          value={displayName}
          placeholder="E.g: Faruq"
          id="displayName"
          onChange={(event: any) => {
            setDisplayName(event.target.value);
          }}
        />
        <label htmlFor="userEmail" className="block">
          Email:
        </label>
        <input
          type="email"
          className="my-1 p-1 w-full"
          name="userEmail"
          value={email}
          placeholder="E.g: faruq123@gmail.com"
          id="userEmail"
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="userPassword" className="block">
          Password:
        </label>
        <input
          type="password"
          className="mt-1 mb-3 p-1 w-full"
          name="userPassword"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event: any) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
          onClick={(event) => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign up
        </button>
      </form>

      {/*<Button onClick={signInWithGoogle}>Google</Button>*/}
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
