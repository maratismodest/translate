import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, useLocation, useHistory, NavLink,
} from "react-router-dom";
import React, {useState} from "react";
import {initialState, translateBaseI18} from "./localBase/base";
import Welcome from "./components/Welcome";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect from "./components/Collect";
import {YMInitializer} from "react-yandex-metrika";
import AidaMenu from "./components/AidaMenu";
import {Game, StyledHeader, StyledMenu, StyledMain, StyledLogo} from "./AppStyles"
import i18n from "i18next";
import Latin from "./components/Latin";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import styled from "styled-components";
import Login from "./components/Login";


const firebaseApp = firebase.initializeApp(firebaseConfig);
function App(props) {
        const { user,
            signOut,
            signInWithGoogle} = props

    const [state, setState] = useState(initialState);
    i18n.init({
        resources: translateBaseI18,
        lng: state.language
    }).then(r => console.log(r));

    return (
        <Game>

            <StyledHeader>
                <NavLink to={'/'}><StyledLogo>Chamala</StyledLogo></NavLink>
                <NavLink to={'/login'}><StyledLogo>Login</StyledLogo></NavLink>
                <StyledMenu>
                    <AidaMenu state={state} setState={setState}/>
                </StyledMenu>
            </StyledHeader>

            <StyledMain>
                <Switch>
                    <Route path={["/words", "/*/words"]} render={() => <Words state={state} setState={setState}/>}/>
                    <Route path={["/phrases", "/*/phrases"]}
                           render={() => <Phrases state={state} setState={setState}/>}/>
                    <Route path={["/collect", "/*/collect"]}
                           render={() => <Collect state={state} setState={setState}/>}/>
                    <Route path={["/result", "/*/result"]} render={() => <Result state={state} setState={setState}/>}/>
                    <Route path={["/about", "/*/about"]} render={() => <h1>About</h1>}/>
                    <Route path={["/latin", "/*/latin"]} render={() => <Latin/>}/>
                    <Route path="/login" render={() => <Login {...props} />}/>
                    <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>


                </Switch>
            </StyledMain>
            <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>

        </Game>


    );
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({firebaseAppAuth,providers}
)(App);

const StyledLogin = styled.div`
  color: #718CCC;
  display: flex;
  width: min-content;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`