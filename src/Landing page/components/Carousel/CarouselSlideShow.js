import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import background from '../../images/homepage/carousel1background.png'
import background2 from '../../images/homepage/carousel2background.png'
import './Carousel.css'
import mobile1 from '../../images/homepage/carousel1mobile.png'
import mobile2 from '../../images/homepage/carousel2mobile.png'
import { Link } from 'react-router-dom';

function CarouselSlideShow() {
    return (
        <>

            <Carousel className="homepage_first">
                {/* First slide starts */}
  <Carousel.Item interval={1000}>

    
    <div class="carousel-item active">
                        <img
                        className="d-block w-100"
                        src={background}
                        alt="First slide"
                        />
                        <div class="carousel-caption1 ">
                            <h3>Order From Your Favourite Local Store Online.</h3>
                            <p>Managing and ordering your daily needs is easy & seamless on our app.</p>
                            <a href="{% url 'homepage' %}"><button class="Find a Store" >Find Stores</button></a>
                        </div>
                         {/* <!------------overlay image------------------> */}
                        <div class="carousel-caption1_img">
                            <img src={mobile1} alt=""/>
                        </div>
                    </div>
                    </Carousel.Item>
  {/* First Slide Ends */}
  <Carousel.Item interval={500}>
            <div class="carousel-item active">
                                            <img
                        className="d-block w-100"
                        src={background2}
                        alt="Second slide"
                        />
                        <div class="carousel-caption2">
                            <h3>Create Your E-Store In Just 15 Mins</h3>
                            <p>Creating an online store has never been this easy, It just takes few steps. Storestreak is the easiest way to start, run and grow your online business.</p>
                            <a href="{% url 'contact' %}"> <button class="Get Started">Get Started</button></a>
                        </div>
                         {/* <!------------overlay image------------------> */}
                        <div class="carousel-caption2_img">
                            <img src={mobile2} alt=""/>
                        </div>
                    </div>
                    </Carousel.Item>
  <Carousel.Item interval={500}>
                    <div class="carousel-item active">

                            <img
                            className="d-block w-100"
                            src={background}
                            alt="Third slide"
                            />
                        <div class="carousel-caption3">
                            <h3>Shopping Experience Made More Easier</h3>
                            <p>Your customers can order now 24x7 directly on your online store & receive order updates & digital receipts on our app.</p>
                            <a href="{% url 'homepage' %}"><button class="Read More">Find Stores</button></a>
                        </div>
                        {/* <!------------overlay image------------------> */}
                        <div class="carousel-caption3_img">
                            <img src={mobile1}/>
                        </div>
                    </div>
  </Carousel.Item>

</Carousel>
<div class="homepage_first_mobile_full">
            <div class="homepage_first_mobile" >
                
                <div class="homepage_first_mobile_background" >
                        <h3>Create Your E-Store In Just 15 Mins.</h3>
                        <p>Creating an online store has never been this easy, it just takes few steps. Storestreak is the easiest way to start, run and grow your online business.</p>
                        <Link to="/contact" ><button class="Get_Started">Let's Get Started</button></Link>
                </div>
                <div class="homepage_first_mobile_img">
                    <img src={mobile2}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default CarouselSlideShow
