import React from "react";
import {StyledWelcome} from '../Welcome/WelcomeStyles'

const Login = ({
                   user,
                   signOut,
                   signInWithGoogle
               }: any) => {
    if (user) {
        return (
            <StyledWelcome>
                <p>Здравствуйте,&nbsp;{user.displayName}</p>
                <button onClick={signOut}>Выйти</button>
            </StyledWelcome>
        )
    }
    return (
        <StyledWelcome>
            <p>Войти</p>
            <button onClick={signInWithGoogle}>Google</button>
        </StyledWelcome>
    )
}
export default Login