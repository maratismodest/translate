import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, useLocation, useHistory,
} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {
    initialState, phrasesTatRus, wordsRusTat
} from "./components/localBase/base";
import Welcome from "./components/Welcome";
import styled from "styled-components";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect, {StyledMenu} from "./components/Collect";
import {YMInitializer} from "react-yandex-metrika";
import AidaMenu from "./components/AidaMenu";
import About from "./components/About";


function App() {
    const [state, setState] = useState(initialState);
    const history = useHistory();
    const {language} = state;

    // useEffect(() => {
    //     // console.log("history",history)
    //     history.push('/')
    // }, [language])
    return (

        // <StyledGame>
        <div style={{position: 'relative'}}>
            <StyledMenu>
                <AidaMenu state={state} setState={setState}/>
            </StyledMenu>

            <Switch>

                {/*<Route path="/" exact render={() => <h1>Home Page</h1>}/>*/}


                <Route path={["/words", "/*/words"]}  render={() => <Words state={state} setState={setState}/>}/>
                <Route path={["/phrases", "/*/phrases"]}  render={() => <Phrases state={state} setState={setState}/>}/>
                <Route path={["/collect", "/*/collect"]}  render={() => <Collect state={state} setState={setState}/>}/>
                <Route path={["/result", "/*/result"]}  render={() => <Result state={state} setState={setState}/>}/>
                <Route path={["/about", "/*/about"]} render={() => <h1>About</h1>}/>
                <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>

            </Switch>
            <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
        </div>

        // </StyledGame>

    );
}

export default App;

export const StyledGame = styled.div`
  padding: 5%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: linear-gradient(91.77deg, #FFFFFF -16.35%, rgba(222, 222, 253, 0.77) 139.34%), #F3F2F9;
  opacity: 0.8;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
`

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};