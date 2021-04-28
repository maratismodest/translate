import React, {useEffect} from "react";
import styled from "styled-components";
import axios from 'axios'
import {useHistory} from "react-router-dom";
import Button from '../../ui/Button';
import GoogleButton from 'react-google-button'
const Login = ({
                   user,
                   signInWithGoogle
               }: any) => {

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

    useEffect(() => {
        getInfo().then((res) => {
            console.log(res)
        })
    }, [])

    useEffect(()=>{
        if (user) {
            history.push('/user')
        }
    },[user])

    return (
        <StyledLogin>
            <p>Войти</p>
            {/*<Button onClick={signInWithGoogle}>Google</Button>*/}
            <GoogleButton
                label='Чамала!'
                onClick={signInWithGoogle }
            />
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