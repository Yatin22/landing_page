import React from 'react';
import "./Tools.css";

function Tools({ image, heading, para }) {
    return (
        <div className="tools_card">
            <div className="tools_img">
                <img src={image} alt=""/>
            </div>
            <div className="tools_text">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </div>
        
    )
}

export default Tools
