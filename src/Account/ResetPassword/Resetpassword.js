import React from 'react'
import './Resetpassword.css';
function Resetpassword() {
    return (
        <div class="password_reset">
            {/* <!-----------------------------password tab-------------------------------------> */}
            <form action="{% url 'forgot-password' %}" method="POST">
                <div id="tab2">
                    <h3>Create New Password</h3>
                    <div id="message"></div>
                    <input type="hidden" name="mobile_number" value="{{mobile_number}}" />
                    <input type="hidden" name="hashed_id" value="{{hashed_id}}" />
                    <input type="Password" oninput="password_validation();" placeholder="Password" name="password" id="password" required />
                    <input type="Password" placeholder="Confirm Password" name="cpassword" id="cpassword"
                        oninput="password_matching('password','cpassword','password_reset_submit','message')" required />

                    <div class="button-box">
                        <input type="hidden" name="password_mode" value="change_password" />
                        <button type="submit" id="password_reset_submit">Finish</button>
                    </div>
                </div>


            </form>
        </div>


    )
}

export default Resetpassword
