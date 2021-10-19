import React, { useState } from 'react'
import './Modal.css';

function Modal({ style }) {

    return (
        <div>

            <div id="elem1" className="mobile_form">
                {/* // <!-- Modal content --> */}
                <div id="non_user_modal" className="modal" style={{ display: { style } }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <a href="https://www.storestreak.com/contact-us" class="modal_close">&times;</a>
                        </div>
                        <div className="modal-body">
                            <h1 className="cardheader">Thank you for your interest</h1>
                            <p className="cardsubname">Our customer service executive will reach out to you shortly.</p>
                        </div>
                        {
                            <div>{style}</div>
                        }
                    </div>
                </div >
            </div>
        </div>

    )
}

export default Modal
