import React from 'react'
import customerview from '../../Landing page/images/auth/mobileverification.png'
import Bluelogo from '../../Landing page/images/base/logo_blue.png';
import '../Login/Login.css';
import { Link } from 'react-router-dom'

function Otp() {
    return (
        <>
            <div className="before_login_pc">
                <div className="before_login_pc_body">
                    <div className="before_login_pc_body_left">


                        <div className="before_login_pc_body_left_overlay_headtext">
                            <h3>The easy way to shop !</h3>
                        </div>

                        <div className="before_login_pc_body_left_overlay_body">
                            <div className="before_login_pc_body_left_overlay_bodyimage">
                                <div className="before_login_pc_body_left_overlay_bodyimage_image">
                                    <img src={customerview} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="before_login_pc_body_left_overlay_footertext">
                            <p>Get all your products from your local stores</p>
                            <p>All in the same Place</p>
                        </div>

                    </div>
                    <div className="before_login_pc_body_right">
                        <div className="before_login_pc_body_right_body">
                            <div className="before_login_pc_body_right_box">

                                <div className="before_login_pc_body_right_top">
                                <div class="before_login_pc_body_right_box_header">
                                   
                                   <a href="/" class="before_login_pc_body_right_box_header_arrow">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   class="bi bi-chevron-left" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd"
                                       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                               </svg>
                           </a>
                           </div>

                                    <div className="before_login_pc_body_right_box_up">
                                        <span className="before_login_pc_body_right_box_up_name">
                                            <div className="brand_logo" style={{ width: '65%', height: '25px' }}>
                                                {/* <img src="{% static './images/base/logo_blue.png' %}"> */}
                                                <img src={Bluelogo} alt="" />
                                            </div>
                                        </span>
                                    </div>
                                </div>

                                <div className="before_login_pc_body_right_box_middle">

                                    <div className="before_login_pc_body_right_box_middle_text">
                                        <h3>Welcome!</h3>
                                        <p className="pblue">Just a few steps to create your account. </p>

                                        <p className="pgray" style={{ color: "#9999b1", fontSize: "0.8rem" }}></p>

                                        <p className="pgray" style={{ color: '#9999b1', fontSize: '0.8rem' }}>Please enter the one time
                                        password send to your phone number for
                                    verification</p>


                                    </div>
                                    <div className="before_login_pc_body_right_password_box_middle_form">
                                        <div className="otp_box_middle_form">
                                            <div className="digit-group" data-group-name="digits" data-autosubmit="false"
                                                autocomplete="off">
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-1"
                                                    name="digit-1" data-next="digit-2" autofocus className="otp_value" required />
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-2"
                                                    name="digit-2" data-next="digit-3" data-previous="digit-1" className="otp_value"
                                                    required />
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-3"
                                                    name="digit-3" data-next="digit-4" data-previous="digit-2" className="otp_value"
                                                    required />
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-4"
                                                    name="digit-4" data-next="digit-5" data-previous="digit-3" className="otp_value"
                                                    required />
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-5"
                                                    name="digit-5" data-next="digit-6" data-previous="digit-4" className="otp_value"
                                                    required />
                                                <input onfocus="checkMediaQuery()" type="number" maxlength="1" id="digit-6"
                                                    name="digit-6" data-previous="digit-5" className="otp_value" required />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="before_login_pc_body_right_box_middle_buttons">
                                        {/* <input name="mobile_number" type="hidden" value="{{mobile_number}}" readonly> */}
                                        {/* <input type="hidden" name="otp_id" value="{{otp_id}}"> */}
                                        {/* <input type="hidden" name="otp" id="otp_verify"> */}
                                        <Link to="/customer/customer-signup-confirm">
                                        <button type="button"
                                        >Verify
                                    OTP</button></Link>
                                        {/* <button type="submit" name="btn" id="hidden_btn" value="otp_submit"></button> */}
                                    </div>



                                    <div className="before_login_pc_body_right_box_middle_account">
                                        <input type="hidden" name="page" value="{{page}}" />
                                        <span class="link_text">Didn't Get The OTP Yet ?</span>
                                        <input name="mobile_number" type="hidden" value="{{mobile_number}}" readonly />
                                        <span class="link_goto"><button type="submit" name="btn" value="otp_resend">Resend OTP</button></span>
                                    </div>

                                </div>

                                <div id="basehide" className="before_login_pc_body_right_box_base">
                                    <span className="before_login_pc_body_right_box_base_text">
                                        @Storestreak 2021. All Right Reserved
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Otp
