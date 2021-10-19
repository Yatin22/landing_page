import React from 'react'
import './MobileVerification.css'
import MobileVerificationImage from '../../Landing page/images/auth/mobileverification.png'
import { Link } from 'react-router-dom';
import BlueLogo from '../../Landing page/images/base/logo_blue.png';
function MobileVerification() {
    //This is force Render to go from signup page to main page
  

    function refreshPage() {
        window.location.reload(false);
      }
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
                            <img src={MobileVerificationImage} alt=""/>
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
                    <div class="before_login_pc_body_right_box">

                        <div class="before_login_pc_body_right_top">
                        <div class="before_login_pc_body_right_box_header">
                                        <a href="/" class="before_login_pc_body_right_box_header_arrow" >                          
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </a>
                                </div>

                            <div class="before_login_pc_body_right_box_up">
                                <span class="before_login_pc_body_right_box_up_name">
                                    <div class="brand_logo" style={{width:"65%",height:"25px"}}>
                                        <img src={BlueLogo} alt=""/>
                                    </div>
                                </span>
                            </div>
                            </div>


                        <form class="before_login_pc_body_right_box_middle" action="{% url 'customer-signup' %}" method="POST">

                        <div class="before_login_pc_body_right_box_middle_text">
                                <h3>Mobile Verification</h3>
                                <p class="pblue">Enter your mobile number .</p>
                                <p class="pgrey" style={{color:"#9999b1",fontSize: "0.8rem"}}>We will send a one time
                                    password to your Phone number for verification.
                                </p>

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
                                    <span class="input_field">
                                        <input type="number" name="" placeholder="Phone Number"/>
                                    </span>
                                </div>

                            </div>
                            
                            

                            <div class="before_login_pc_body_right_box_middle_buttons">
                                <Link to="/customer/otp"><button>Send Otp</button></Link>
                            </div>

                           

                        </form>

                        <div id="basehide" class="before_login_pc_body_right_box_base">
                            <span class="before_login_pc_body_right_box_base_text">
                                @Storestreak 2021. All Right Reserved
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



 
        </>
    )
}

export default MobileVerification
