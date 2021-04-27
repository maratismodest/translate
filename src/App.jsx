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
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
function App({ user,
                 signOut,
                 signInWithGoogle}) {
    console.log("withFirebaseAuth",withFirebaseAuth)

    console.log(firebaseApp)
    const [state, setState] = useState(initialState);
    i18n.init({
        resources: translateBaseI18,
        lng: state.language
    }).then(r => console.log(r));

    return (
        <Game>
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {
                    user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                }
                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </header>
            <StyledHeader>
                <NavLink to={'/'}><StyledLogo>Chamala</StyledLogo></NavLink>
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
// export default App;

// console.log("state", state)

// i18n.init({
//     resources: translateBaseI18,
//     lng: state.language
// });