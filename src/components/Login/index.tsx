import React from "react";
import {StyledWelcome} from '../Welcome/WelcomeStyles'
import styled from "styled-components";

const Login = ({
                   user,
                   signOut,
                   signInWithGoogle
               }: any) => {
    if (user) {
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.uid)
        return (
            <StyledLogin>
                <p>Здравствуйте,&nbsp;{user.displayName}</p>
                <p>Ваша почта: {user.email}</p>
                <p>Ваш ID: {user.uid}</p>
                <button onClick={signOut}>Выйти</button>
            </StyledLogin>
        )
    }
    return (
        <StyledLogin>
            <p>Войти</p>
            <button onClick={signInWithGoogle}>Google</button>
        </StyledLogin>
    )
}
export default Login

const StyledLogin = styled.div`
  color: #718CCC;
  display: flex;
  width: min-content;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`