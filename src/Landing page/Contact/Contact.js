import React, { useState } from 'react'
import './Contact.css';
import './Modal.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
    },
};
function Contact() {

    const [modalIsOpen, setIsOpen] = useState(false);
    // function closeModal() {
    //     setIsOpen(false);
    // }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="contactus">
                <div className="contactus_head">
                </div>
                <div className="contactus_body">
                    <div className="contactus_body_innerdiv">
                        <div className="contactus_body_heading">
                            <h3>Contact Us</h3>
                            <p>Need of a E-store ? Please fill out the form below.</p>
                            <p>Our team is happy to answer your questions. Fill out the form and we’ll be in touch as soon as possible.</p>
                        </div>
                        <form className="contactform">
                            <div className="contactformblock">
                                <label>Name</label>
                                <input type="text" name="" required placeholder="Enter your Full Name..." />
                            </div>
                            <div className="contactformblock">
                                <label>Contact Number</label>
                                <input type="number" required name="" placeholder="Enter your Mobile Number..." />
                            </div>
                            <div className="contactformblock">
                                <label>E-mail</label>
                                <input type="email" required name="" placeholder="Enter your Email..." />
                            </div>
                            <div className="contactformblock">
                                <label>Subject</label>
                                <input type="text" required name="" placeholder="Subject" />
                            </div>
                            <div className="contactformblock_message">
                                <label>Message</label>
                                <textarea name="message" required placeholder="Enter your message" maxlength="1000" rows="4"></textarea>
                            </div>
                            <button onClick={openModal}>Submit</button>
                            <Modal
                                isOpen={modalIsOpen}
                                style={customStyles}
                            >
                                <div className="mobile_form">
                                    <div className="modal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                {/* <a to="/contact-us" className="modal_close">&times;</a> */}
                                                <Link className="modal_close" to="/dashboard" onClick={() => window.location.reload()}>&times;</Link>
                                            </div>
                                            <div className="modal-body">
                                                <h1 className="cardheader">Thank you for your interest</h1>
                                                <p className="cardsubname">Our customer service executive will reach out to you shortly.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </form>
                    </div>

                </div>


                <div className="contactus_body_footer">
                    <div className="contactus_body_footer_address">
                        <h3>Registered address</h3>
                        <p>270/1 dwarik jungle road,bhadrakali</p>
                        <p>hooghly hindmotor-712232 West Bengal</p>
                    </div>
                    <div className="contactus_body_footer_email">
                        <h3>Email support</h3>
                        <a href="/">storestreak@support</a>
                    </div>
                    <div className="contactus_body_footer_phone">
                        <h3>Contact number</h3>
                        <p>+9876543210</p>
                    </div>
                </div>

                <div className="contactus_body_map">
                    <div className="map">
                        <div className="contact-map box">
                            <div id="map" className="contact-map">
                                <div style={{ width: "100%" }}>
                                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0"
                                        marginwidth="0" title="iframe" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;
                            q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;
                            iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
