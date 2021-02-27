import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React, {useState} from "react";
import {
    initialState
} from "./components/localBase/base";
import Welcome from "./components/Welcome";
import styled from "styled-components";
import Words from "./components/Words";
import Result from "./components/Result";
import Phrases from "./components/Phrases";
import Collect from "./components/Collect";
import {YMInitializer} from "react-yandex-metrika";

function App() {
    const [state, setState] = useState(initialState);

    return (
        <Router>
            <StyledGame>
                <Switch>
                    <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>
                    <Route path="/words" exact render={() => <Words state={state} setState={setState}/>}/>
                    <Route path="/phrases" exact render={() => <Phrases state={state} setState={setState}/>}/>
                    <Route path="/collect" exact render={() => <Collect state={state} setState={setState}/>}/>
                    <Route path="/result" exact render={() => <Result state={state} setState={setState}/>}/>
                </Switch>
                <YMInitializer accounts={[72761164]} options={{webvisor: true}} version="2"/>
            </StyledGame>
        </Router>
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