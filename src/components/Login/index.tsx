import React from "react";
import {StyledWelcome} from '../Welcome/WelcomeStyles'

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