import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GetPlanetsData from "./components/getPlanetsData";
import Main from "./components/main";

function App() {
    
    return ( 
        <Router>
            
            <Switch>

                <Route path="/main">
                    <GetPlanetsData />
                </Route>

                <Route to="/">
                    <Main />
                </Route>

            </Switch>

        </Router>
    );
}

export default App;