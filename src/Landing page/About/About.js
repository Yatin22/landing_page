import React from 'react'
import about from '../images/homepage/about.png'
import check from '../images/homepage/check.png'
import './About.css'
function About() {
    return (
        <>
           <div class="aboutus">
        <div class="aboutus_heading">
            <h3>About Us</h3>
        </div>
        <div class="aboutus_body">
            <div class="aboutus_body_first">
                <div class="aboutus_body_left">
                    <p>We are a group of young entrepreneurs who believes that technology can change millions of lives.
                    We have to redefine the way business operate in India by showing them the power of the internet to
                    build, scale and organize business in the coolest possible way.</p>
                    <br/>
                    <p>"We are not in the business of building digital store but growing business."</p>
                    <br/>

                </div>
                <div class="aboutus_body_right">
                    <img src={about} alt=""/>
                </div>
            </div>
            <div class="aboutus_body_second">
                <div class="aboutus_body_second_heading">
                    <h3>What we value at Storestreak.</h3>
                </div>
                <ul class="values">
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt=""/></div>
                        <div class="li_text">Best experience for customer</div>
                    </li>
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt=""/></div>
                        <div class="li_text">Perfect Decisions</div>
                    </li>
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt="" /></div>
                        <div class="li_text">Start With Customers</div>
                    </li>
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt=""/></div>
                        <div class="li_text">Move Digitally Fast</div>
                    </li>
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt=""/></div>
                        <div class="li_text">Your E-store</div>
                    </li>
                    <li class="liblock">
                        <div class="li_img"><img src={check} alt=""/></div>
                        <div class="li_text">Perfect Choice</div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
        </>
    )
}

export default About
