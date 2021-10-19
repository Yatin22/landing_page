import React from "react";
import '../Main CSS/Landing.css'
import Header from "../../Landing page/components/Header/Header";
import { BrowserRouter as Router, Switch, Route }
    from "react-router-dom";
import Home from "../../Landing page/components/Home/Home";
import Footer from "../../Landing page/components/Footer/Footer";
import Contact from "../../Landing page/Contact/Contact";
import About from "../../Landing page/About/About";

function Landing() {
    return (
        <>
            <Router>
                <Route path="/" >
               
                <Header />
                </Route>

                <Switch>
                    
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Route path="/" >
                    <Footer />
                </Route>

            </Router>
        </>
    )
}

export default Landing
