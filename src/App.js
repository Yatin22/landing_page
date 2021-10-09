import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Login from "./Login/Login";


export default function App({location}) {
  return (
    <>
      <Router>
      <Route path="/" render={(props) => (props.location.pathname !== "/customer-login") && 
    <Header />}>
    </Route>

        <Switch>
          <Route path="/customer-login">
            <Login/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          <Route path="/" render={(props) => (props.location.pathname !== "/customer-login") && 
        <Footer/>}>
    </Route>
          
    </Router>
    </>
  );
}

