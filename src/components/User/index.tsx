import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios'
import {Button} from "antd";
import {useHistory} from "react-router-dom";

const User = ({
                  user,
                  signOut,
              }: any) => {

    const [db, setDb] = useState<any>(null);
    const history = useHistory();

    async function getInfo() {
        try {
            const res = await axios.get(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json`);
            return res
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async function addUser(id: string) {
        try {
            const updated = {count: 0, correct: 0, mistake: 0};
            const res = await axios.put(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`, updated);
            return res
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(() => {
        getInfo().then((res) => {
            setDb(res.data)
        })
    }, [])


    if (!db) {
        return <div>Загрузка</div>
    }
    if (!user) {
        history.push('/login')
        return null
    }

    const currentUser = db[user.uid]
    if (!currentUser) {
        addUser(user.uid).then((res) => {
            console.log(res)
            window.location.reload();
            return null
        })
    }
    return (
        <StyledLogin>
            <p>Здравствуйте,&nbsp;{user.displayName}</p>
            <p>Ваш ID: {user.uid}</p>
            <div>Ваша статистика</div>
            <p>Количество игр: {currentUser.count}</p>
            <p>Количество правильных ответов:{currentUser.correct} </p>
            <p>Количество неправильных ответов:{currentUser.mistake} </p>
            <hr/>
            <Button onClick={signOut}>Выйти</Button>
        </StyledLogin>
    )


}
export default User

const StyledLogin = styled.div`
  color: #718CCC;
  display: flex;
  width: min-content;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`