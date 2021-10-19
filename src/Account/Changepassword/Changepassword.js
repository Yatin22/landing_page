import React from 'react'
import Bluelogo from '../../Landing page/images/base/logo_blue.png';
import './Changepassword.css';
function Changepassword() {
    return (

        <div className="before_login_pc">
            <div className="before_login_pc_body" >
                <div className="before_login_pc_body_right" >
                    <div className="before_login_pc_body_right_body">
                        <div className="before_login_pc_body_right_box">

                            <div className="before_login_pc_body_right_top">


                                <div className="before_login_pc_body_right_box_up">
                                    <span className="before_login_pc_body_right_box_up_name">
                                        <div className="brand_logo" style={{ width: '65%', height: '25px' }}>
                                            <img src={Bluelogo} alt="" />
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <form action="{% url url_path message='change' %}" method="POST" className="before_login_pc_body_right_box_middle">
                                <input type="hidden" name="mobile_number" value="{{mobile_number}}" />
                                <input type="hidden" name="password_mode" value="change_password" />

                                <div className="before_login_pc_body_right_box_middle_text">
                                    <h3 className="primaryheading">Create New Password</h3>
                                    <p className="pblue tertiaryheading">You can reset your password here!</p>

                                </div>

                                <div className="before_login_pc_body_right_password_box_middle_form">
                                    <div className="before_login_pc_body_right_password_box_middle_form_input">
                                        <span className="input_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path
                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                        </span>
                                        <span className="input_field">
                                            <input onfocus="checkMediaQuery()" placeholder="Old password" type="Password" name="old_password" id="old_password" required />
                                        </span>
                                    </div>
                                    <div className="before_login_pc_body_right_password_box_middle_form_input">
                                        <span className="input_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path
                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                        </span>
                                        <span className="input_field">
                                            <input onfocus="checkMediaQuery()" type="Password" oninput="password_validation();" placeholder="Password" name="password" id="password" required />
                                        </span>
                                    </div>
                                    <div className="before_login_pc_body_right_password_box_middle_form_input">
                                        <span className="input_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path
                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                        </span>
                                        <span className="input_field">
                                            <input onfocus="checkMediaQuery()" type="Password" placeholder="Confirm Password" name="cpassword" id="cpassword" oninput="password_matching('password','cpassword','password_reset_submit','message')" required />
                                        </span>
                                    </div>
                                </div>
                                <div className="before_login_pc_body_right_box_middle_text">
                                    <p className="pgrey" style={{ color: '#9999b1', fontSize: '0.8rem' }} id="message"></p>
                                </div>

                                <div className="before_login_pc_body_right_box_middle_buttons">
                                    <button type="submit" id="password_reset_submit">Finish</button>
                                </div>

                            </form>

                            <div id="basehide" className="before_login_pc_body_right_box_base" >
                                <span className="before_login_pc_body_right_box_base_text">
                                    @Storestreak 2021. All Right Reserved
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Changepassword