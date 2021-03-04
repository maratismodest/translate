import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, useLocation, useHistory, NavLink,
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
import {device} from "./components/responsiveStyled";

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
            <NavLink to={'/'}><StyledMain>Chamala</StyledMain></NavLink>
            <Switch>

                {/*<Route path="/" exact render={() => <h1>Home Page</h1>}/>*/}


                <Route path={["/words", "/*/words"]} render={() => <Words state={state} setState={setState}/>}/>
                <Route path={["/phrases", "/*/phrases"]} render={() => <Phrases state={state} setState={setState}/>}/>
                <Route path={["/collect", "/*/collect"]} render={() => <Collect state={state} setState={setState}/>}/>
                <Route path={["/result", "/*/result"]} render={() => <Result state={state} setState={setState}/>}/>
                <Route path={["/about", "/*/about"]} render={() => <h1>About</h1>}/>
                <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>

            </Switch>
            <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
        </div>

        // </StyledGame>

    );
}

export default App;

const StyledMain = styled.div`
  z-index: 1;
  position: absolute;
  left: 60px;
  top: 40px;
  font-weight: bold;

  line-height: 133%;
  font-family: Rubik;
  font-style: normal;
  @media ${device.desktop} {

    font-size: 26px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    left: 32px;
    top: 32px;

`

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

