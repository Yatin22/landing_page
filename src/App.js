import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Landing from "./Main/Main JS/Landing";
import AccMain from "./Main/Main JS/AccMain";





export default function App({ location }) {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/customer">
            <AccMain/>
          </Route>
          <Route path="/business">

          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

