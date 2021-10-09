import React from 'react';
import "./Home.css";

import BussinessTools from '../Tools/BussinessTools';
import EnhanceShoppingExperienceTools from '../Tools/EnhanceShoppingExperienceTools';
import EStoreFacts from '../Facts/EstoreFacts';
import FindLocalStore from '../Store/FindLocalStore';
import EStore from '../Store/EStore';
import CarouselSlideShow from '../Carousel/CarouselSlideShow'


function Home() {
    return (
        <>
            <CarouselSlideShow/>
            <FindLocalStore/>
            <div className="homepage_fifth">
                <div className="homepage_fifth_intro">
                    <h1>Enhance Your Shopping Experience with Storestreak.</h1>
                </div>
                <div className="homepage_fifth_tools">
                    <EnhanceShoppingExperienceTools/>
           </div>
           </div>
                <div className="homepage_third">
                    <div className="homepage_third_intro">
                        <h1>What is a E-store</h1>
                        <p className="intro_p">Storestreak is a platform which provides local stores in your area to create there stores online and also there local customer to stay at home and order online at the same price.</p>
                    </div>
                    <div className="homepage_third_facts">
                        <EStoreFacts/>
                    </div>
                    </div>
                    <EStore/>
                <div className="homepage_fifth">
            <div className="homepage_fifth_intro">
                <h1>Empower Your Business With The Right Tools</h1>
            </div>
            <div className="homepage_fifth_tools">
                    <BussinessTools/>
                </div>
            </div>


        </>
    )
}

export default Home
