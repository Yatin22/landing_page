import React from 'react';
import './Store.css';

function Store({ image, title, heading_one, heading_two, heading_three, para_one, para_two, para_three, service_name }) 

{
    return (
        <>
            <div className="homepage_second_services">
                <div className="homepage_services_part">
                    <div className="customer_service">
                        <div className="customer_service_img">
                            <img src={image} alt="" />
                        </div>
                        <div className="customer_service_text">
                            <div className="homepage_services_heading">
                                <h1 className="title">{title}</h1>
                            </div>

                            <h3>{heading_one}</h3>
                            <p>{para_one}</p>
                            <h3>{heading_two}</h3>
                            <p>{para_two}</p>
                            <h3>{heading_three}</h3>
                            <p>{para_three}</p>
                            <a href="/"><button className="Find a Store">{service_name}</button></a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Store
