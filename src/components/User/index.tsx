import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios'
import {Button} from "antd";

const User = ({
                   user,
                   signOut,
                   signInWithGoogle
               }: any) => {

    const [db, setDb] = useState<any>(null);

    async function getInfo() {
        try {
            const res = await axios.get(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json`);
            console.log('res', res);
            return res
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async function addCount(id: string) {
        try {
            const current = db[user.uid];
            const updated = {...current, count: current.count + 1};
            console.log(updated)
            const res = await axios.put(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`, updated);
            console.log('res', res);
            return res
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async function addUser(id: string) {
        try {
            const current = db[user.uid];
            const updated = {count: 0, correct: 0, mistake: 0};
            console.log(updated)
            const res = await axios.put(`https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`, updated);
            console.log('res', res);
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

    const addCountHandler = () => {
        console.log("addCountHandler")
        addCount(user.uid).then((res) => {
            console.log(res);
            window.location.reload();
        })
    }
    if (!db) {
        return <div>Загрузка</div>
    }
    if (user && db) {
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.uid)
        const currentUser = db[user.uid]
        if (!currentUser) {
            addUser(user.uid).then((res)=>{
                console.log(res)
            })
            window.location.reload();
        }
        console.log(currentUser)
        return (
            <StyledLogin>
                <p>Здравствуйте,&nbsp;{user.displayName}</p>
                <p>Ваша почта: {user.email}</p>
                <p>Ваш ID: {user.uid}</p>
                <div>Ваша статистика</div>
                <p>Количество игр: {currentUser.count}</p>
                <p>Количество правильных ответов:{currentUser.correct} </p>
                <p>Количество неправильных ответов:{currentUser.mistake} </p>
                <Button onClick={addCountHandler}>Add</Button>
                <hr/>
                <Button onClick={signOut}>Выйти</Button>
            </StyledLogin>
        )
    }
    return (
        <div>Что-то пошло не так. Попробуйте перелогиниться</div>
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