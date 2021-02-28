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

        <StyledGame>
            <StyledMenu>
                <AidaMenu state={state} setState={setState}/>
            </StyledMenu>

            <Switch>
                {/*<Route path="/about" render={() => <h1>About</h1>}/>*/}
                {/*<Route path="/" exact render={() => <h1>Home Page</h1>}/>*/}

                <Route path="/about" exact render={() => <About state={state} setState={setState}/>}/>
                <Route path="/words" exact render={() => <Words state={state} setState={setState}/>}/>
                <Route path="/phrases" exact render={() => <Phrases state={state} setState={setState}/>}/>
                <Route path="/collect" exact render={() => <Collect state={state} setState={setState}/>}/>
                <Route path="/result" exact render={() => <Result state={state} setState={setState}/>}/>
                <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>

            </Switch>
            <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>


        </StyledGame>

    );
}

export default App;

const StyledGame = styled.div`
  padding: 5%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;

  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
`