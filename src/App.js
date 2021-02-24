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

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Game/>}/>
                <Route path="/about" exact render={() => <About/>}/>
                <Route path="/users" exact render={() => <Users/>}/>
            </Switch>

        </Router>
    );
}

export default App;
