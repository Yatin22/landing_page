import React from 'react';
import './Facts.css';

function Facts({ image, heading, para }) {
    return (

<>
        <div className="facts_card">
            <div className="facts_img">
                <img src={image} alt=""/>
            </div>
            <div className="facts_text">
                <h3 className="fact_h3">{heading}</h3>
                <p className="fact_p">{para}</p>
            </div>
        </div>
        

</>
    )
}

export default Facts
