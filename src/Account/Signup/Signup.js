import React from 'react'
import customerview from '../../Landing page/images/auth/customerview.png'
import Bluelogo from '../../Landing page/images/base/logo_blue.png';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
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
                                                <img src={Bluelogo} alt="" />
                                            </div>
                                        </span>
                                    </div>
                                </div>

                               
                                <form className="before_login_pc_body_right_box_middle" action="{% url 'inside_signup' %}" method="POST">
                                    
                                    <div className="before_login_pc_body_right_box_middle_text">
                                        <h3>Almost there</h3>
                                        <p className="pblue">One last step and you will be all set !</p>
                                    </div>

                                    <div className="before_login_pc_body_right_business_id_box_middle_form">

                                        <div className="before_login_pc_body_right_business_id_box_middle_form_input">
                                            <span className="input_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </span>
                                            <span className="input_field">
                                                <input type="hidden" name="mobile_number" value="{{mobile_number}}" />
                                                <input type="hidden" name="hashed_id" value="{{hashed_id}}" />
                                                <input type="hidden" name="business_key" value="{{business_key}}" />
                                                <input type="hidden" name="product_key" value="{{product_key}}" />
                                                <input type="hidden" name="quantity" value="{{quantity}}" />
                                                <input type="hidden" name="hidden_btn" value="{{hidden_val}}" />
                                                <input type="text" name="customer_name" placeholder="Full Name" required />
                                            </span>
                                        </div>

                                    </div>
                                    <div className="before_login_pc_body_right_password_box_middle_form">

                                        <div className="before_login_pc_body_right_password_box_middle_form_input">
                                            <span className="input_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                            </span>
                                            <span className="input_field">
                                                <input type="password" placeholder="Password" name="password" id="password"
                                                    oninput="password_validation();" required />
                                            </span>
                                        </div>

                                    </div>
                                    <div className="before_login_pc_body_right_password_box_middle_form">

                                        <div className="before_login_pc_body_right_password_box_middle_form_input">
                                            <span className="input_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                            </span>
                                            <span className="input_field">
                                                <input type="password" placeholder="Confirm Password" name="cpassword"
                                                    id="cpassword"
                                                    oninput="password_matching('password','cpassword','signup_submit','message')"
                                                    required />
                                            </span>
                                        </div>

                                    </div>
                                    <div className="before_login_pc_body_right_box_middle_text">
                                        <p className="pgrey" style={{ color: '#9999b1', fontSize: '0.8rem' }} id="message"></p>
                                    </div>


                                    <div className="before_login_pc_body_right_box_middle_buttons">
                                        <input type="hidden" name="password_mode" value="signup" />
                                        <button type="submit" id="signup_submit">Finish</button>
                                    </div>



                                </form>

                                <div id="basehide" className="before_login_pc_body_right_box_base">
                                    <span className="before_login_pc_body_right_box_base_text">
                                        @Storestreak 2021. All Right Reserved
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Signup