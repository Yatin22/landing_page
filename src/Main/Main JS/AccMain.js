import React from 'react'
import { BrowserRouter as Router, Switch, Route }
    from "react-router-dom";
import MobileVerification from '../../Account/MobileVerification/MobileVerification';
import Login from '../../Account/Login/Login'
import Otp from '../../Account/Otp/Otp'
import Signup from '../../Account/Signup/Signup';
import Changepassword from '../../Account/Changepassword/Changepassword';
import Resetpassword from '../../Account/ResetPassword/Resetpassword';
function AccMain({ location }) {
    return (
        <>
            <Router>
                

                <Switch>
                    <Route  path="/customer/customer-signup">
                        <MobileVerification/>
                    </Route>
                    <Route path="/customer/customer-login">
                        <Login/>
                    </Route>
                    <Route path="/customer/otp">
                        <Otp/>
                    </Route>
                    <Route path="/customer/customer-signup-confirm">
                        <Signup/>
                    </Route>
                    <Route path="/customer/changePassword">
                        <Changepassword/>
                    </Route>
                    <Route path="/customer/resetPassword">
                        <Resetpassword/>
                    </Route>
                    
                    {/* <Route path="/">
                        Hello world
                        <a href="/"><button>back</button></a>
                    </Route> */}
                </Switch>
                

            </Router>
        </>
    )
}

export default AccMain

