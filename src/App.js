import 'antd/dist/antd.css';
import './App.css';
import Game from "./components/Game";
import Users from './components/Users'
import About from './components/About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, {useState} from "react";
import {initialState} from "./components/Game/base";
import Welcome from "./components/Welcome";
import styled from "styled-components";
import Words from "./components/Words";


function App() {
    const [state, setState] = useState(initialState);
    return (
        <Router>
            <StyledGame>
            <Switch>
                <Route path="/" exact render={() => <Welcome state={state} setState={setState}/>}/>
                <Route path="/words" exact render={() => <Words state={state} setState={setState}/>}/>
                <Route path="/about" exact render={() => <About/>}/>
                <Route path="/users" exact render={() => <Users/>}/>
            </Switch>
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