import React from 'react'
import './Login.css'
import customerview from '../images/auth/customerview.png'
import Bluelogo from '../images/base/logo_blue.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
         <div class="before_login_pc">
        <div class="before_login_pc_body">
            <div class="before_login_pc_body_left">
                <div class="before_login_pc_body_left_overlay_headtext">
                    <h3>The easy way to shop !</h3>
                </div>

                <div class="before_login_pc_body_left_overlay_body">
                    <div class="before_login_pc_body_left_overlay_bodyimage">
                        <div class="before_login_pc_body_left_overlay_bodyimage_image">
                            <img src={customerview} alt=""/>
                        </div>
                    </div>
                </div>


                <div class="before_login_pc_body_left_overlay_footertext">
                    <p>Get all your products from your local stores</p>
                    <p>All in the same Place</p>
                </div>

            </div>
            <div class="before_login_pc_body_right">
                <div class="before_login_pc_body_right_body">
                    {/* {% if page == 'outside' %} */}
                    <div class="before_login_pc_body_right_box">
                        {/* {% else %} */}
                        <form action="{% url 'inside_signup' %}" method="POST"         
                         class="before_login_pc_body_right_box">
                            {/* {% endif %} {% csrf_token %} */}
                            <div class="before_login_pc_body_right_top">
                                <div class="before_login_pc_body_right_box_header">
                                    {/* {% if back_link %} */}
                                        <Link to="/" class="before_login_pc_body_right_box_header_arrow">
                                    {/* {% else %} */}
                                        <Link to="/" class="before_login_pc_body_right_box_header_arrow">
                                    {/* {% endif %} */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </Link>
                                </Link>
                                </div>

                                <div class="before_login_pc_body_right_box_up">
                                    <span class="before_login_pc_body_right_box_up_name">
                                     <div class="brand_logo" style={{width:"65%",height:"25px"}}>
                                        <img src={Bluelogo} alt=""/>
                                    </div>
                                </span>
                                </div>
                            </div>


                            <div class="before_login_pc_body_right_box_middle">

                                <div class="before_login_pc_body_right_box_middle_text ">
                                    <h3 class="primaryheading">Hello Again !</h3>
                                    <p class="pblue tertiaryheading">Let's explore new and exiciting products!</p>

                                </div>
                                <div class="error">
                                    {/* {% if error != None %} */}
                                    {/* <p>{{error}}</p> */}
                                    {/* {% endif %} */}
                                </div>

                                <div class="before_login_pc_body_right_business_id_box_middle_form">

                                    <div class="before_login_pc_body_right_business_id_box_middle_form_input">
                                        <span class="input_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                        <span class="input_field">                                           <input onfocus="checkMediaQuery()" required type="number" name="mobile_number" class="username" placeholder="Phone Number" value="{{mobile_number}}" maxlength="10" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onChange/>
                                    </span>
                                    </div>

                                </div>
                                <div class="before_login_pc_body_right_password_box_middle_form">

                                    <div class="before_login_pc_body_right_password_box_middle_form_input">
                                        <span class="input_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path
                                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                    </span>
                                        <span class="input_field">
                                            <input required type="password" name="password" class="password" placeholder="Password" onfocus="checkMediaQuery()"/>
                                    </span>
                                    </div>

                                </div>


        
                                {/* {% if page == 'inside' %} */}
                                <input type="hidden" name="business_key" value="{{business_key}}"/>
                                <input type="hidden" name="product_key" value="{{product_key}}"/>
                                <input type="hidden" name="quantity" value="{{quantity}}"/>
                                <input type="hidden" name="hidden_btn" value="{{hidden_val}}"/> 
                                {/* {% endif %} */}
                                <div class="before_login_pc_body_right_box_middle_form_link">
                                    <div class="link">
                                        <a href="{% url 'forgot-password' %}"><span>Forgot Password?</span></a>
                                    </div>
                                </div>

                                <div class="before_login_pc_body_right_box_middle_buttons">
                                    <button type="submit" name="btn" value="login_submit" class="submit_button">Login</button>
                                </div>
                                <div class="before_login_pc_body_right_box_middle_account">
                                    <span class="link_text">Don't have an Account ?</span>
                                    <span class="link_goto"><a href="{% url 'customer-signup' %}">Sign Up</a></span>
                                    <br/>
                                    <span class="before_login_pc_body_right_box_base_text">
                                    @Storestreak 2021. All Right Reserved
                                    </span>
                                </div>
                            </div>

                            
                        </form>
                   </div>
                </div>
            </div>
</div>
</div>
        </>
    )
}

export default Login
