import "antd/dist/antd.css";
import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { initialState } from "./localBase/base";
import { translateBaseI18 } from "./localBase/translate";
import Welcome from "./components/Welcome";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect from "./components/Collect";
import Menu from "./components/Menu";
import { Game, StyledHeader, StyledLogo, StyledMain } from "./AppStyles";
import i18n from "i18next";
import Latin from "./components/Latin";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
import AppContext from "./AppContext";
import Login from "./components/Login";
import User from "./components/User";
import Word from "./components/Word";
import PickGame from "./components/PickGame";
import { parseSDKVersion } from "@ionic/cli/lib/integrations/cordova/android";
import { YMInitializer } from "react-yandex-metrika";

const firebaseApp = firebase.initializeApp(firebaseConfig);

function App(props: any) {
  const [state, setState] = useState(initialState);
  i18n
    .init({
      resources: translateBaseI18,
      lng: state.language,
    })
    .then();

  const context = {
    state,
    setState,
  };

  return (
    <AppContext.Provider value={context}>
      <Game>
        <StyledHeader>
          <NavLink to={"/"}>
            <StyledLogo level={2} bold color={"green"}>
              Chamala
            </StyledLogo>
          </NavLink>
          <Menu {...props} />
        </StyledHeader>

        <StyledMain>
          <Switch>
            <Route path={["/word", "/*/word"]} render={() => <Word />} />
            <Route path={["/words", "/*/words"]} render={() => <Words />} />
            <Route
              path={["/phrases", "/*/phrases"]}
              render={() => <Phrases />}
            />
            <Route
              path={["/collect", "/*/collect"]}
              render={() => <Collect />}
            />
            <Route
              path={["/result", "/*/result"]}
              render={() => <Result {...props} />}
            />
            <Route
              path={["/about", "/*/about"]}
              render={() => <h1>About</h1>}
            />
            <Route path={["/latin", "/*/latin"]} render={() => <Latin />} />
            <Route path="/login" render={() => <Login {...props} />} />
            <Route path="/user" render={() => <User {...props} />} />
            <Route
              path="/pickgame"
              exact
              render={() => <PickGame {...props} />}
            />
            <Route path="/" exact render={() => <Welcome />} />
          </Switch>
        </StyledMain>
        <YMInitializer
          accounts={[72761164]}
          options={{ webvisor: true }}
          version="2"
        />
      </Game>
    </AppContext.Provider>
  );
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({ firebaseAppAuth, providers })(App);
