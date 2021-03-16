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
} from "./localBase/base";
import Welcome from "./components/Welcome";
import styled from "styled-components";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect from "./components/Collect";
import {YMInitializer} from "react-yandex-metrika";
import AidaMenu from "./components/AidaMenu";
import {device} from "./components/responsiveStyled";

function App() {
    const [state, setState] = useState(initialState);
    const history = useHistory();
    const {language} = state;

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

                {/*<Route path="/" exact render={() => <h1>Home Page</h1>}/>*/}


                <Route path={["/words", "/*/words"]} render={() => <Words state={state} setState={setState}/>}/>
                <Route path={["/phrases", "/*/phrases"]} render={() => <Phrases state={state} setState={setState}/>}/>
                <Route path={["/collect", "/*/collect"]} render={() => <Collect state={state} setState={setState}/>}/>
                <Route path={["/result", "/*/result"]} render={() => <Result state={state} setState={setState}/>}/>
                <Route path={["/about", "/*/about"]} render={() => <h1>About</h1>}/>
                <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>

            </Switch>
            </StyledMain>
            <div>Chamala 2021</div>
            <div hidden>
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
            </div>

        </Game>


    );
}

export default App;

const Game =styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  background: linear-gradient(91.77deg, #FFFFFF -16.35%, rgba(222, 222, 253, 0.77) 139.34%), #F3F2F9;
  opacity: 0.8;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
  @media ${device.desktop} {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 40px;
    padding-bottom: 70px;
  }
  @media ${device.laptop} {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 22px;
    padding-bottom: 22px;
  }
`

const StyledHeader = styled.div`
  position: relative;
  //border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledLogo = styled.div`
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

const StyledMenu = styled.div`
  @media ${device.desktop} {
    right: 78px;
    top: 45px;

  }
  @media ${device.laptop} {
    right: 32px;
    top: 25px;
  }

`

const StyledMain = styled.div`
  //width: 100%;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
`

