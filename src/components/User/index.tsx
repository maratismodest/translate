import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { StyledBody } from "../Welcome/WelcomeStyles";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Header from "../../ui/Header";
const User = ({ user, signOut }: any) => {
  const [db, setDb] = useState<any>(null);
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

  async function addUser(id: string) {
    try {
      const updated = { count: 0, correct: 0, mistake: 0 };
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
      setDb(res.data);
    });
  }, []);

  if (!db) {
    return <div>Загрузка</div>;
  }
  if (!user) {
    history.push("/login");
    return null;
  }

  const currentUser = db[user.uid];
  if (!currentUser) {
    addUser(user.uid).then((res) => {
      console.log(res);
      window.location.reload();
      return null;
    });
  }
  return (
    <StyledUser>
      <Text>Здравствуйте,&nbsp;{user.displayName}</Text>
      <Text>Ваш ID: {user.uid}</Text>
      <Header level={3}>Ваша статистика</Header>
      <Text>Количество игр: {currentUser.count}</Text>
      <Text>Количество правильных ответов:{currentUser.correct} </Text>
      <Text>Количество неправильных ответов:{currentUser.mistake} </Text>
      <hr />
      <Button onClick={signOut}>Выйти</Button>
    </StyledUser>
  );
};
export default User;

const StyledLogin = styled.div`
  color: #718ccc;
  display: flex;
  width: min-content;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledUser = styled(StyledBody)`
  text-align: left;
`;
