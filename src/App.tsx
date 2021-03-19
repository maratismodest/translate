import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, useLocation, useHistory, NavLink,
} from "react-router-dom";
import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import {
    initialState, phrasesTatRus, wordsRusTat
} from "./localBase/base";
import Welcome from "./components/Welcome";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect from "./components/Collect";
import {YMInitializer} from "react-yandex-metrika";
import AidaMenu from "./components/AidaMenu";
import {Game, StyledHeader, StyledMenu, StyledMain, StyledLogo} from "./AppStyles"
import {InitialStateInterface} from "./localBase/base"

interface AppInterface {
    state: InitialStateInterface
    setState : Dispatch<SetStateAction<InitialStateInterface>>
}

function App() {
    const [state, setState] = useState(initialState);

    return (
        <Game>
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
                    <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>

                </Switch>
            </StyledMain>
            <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>

        </Game>


    );
}

export default App;

