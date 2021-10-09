import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo_white from '../../images/base/logo_white.png'

function Footer() {
    return (
        <div className="footer">
            < div className="footer_body" >
                <div className="footer_img">
                    <img src={logo_white} alt="" />
                </div>
                <div className="footer_links">
                    <div className="footer_links_1">
                        <ul>
                            <li><Link className="link" to="/customer-login">Customer Login</Link></li>
                            <li><Link className="link" to="/business-login">Seller Login</Link></li>
                            <li><Link className="link" to="/customer-signup">Be a Customer</Link></li>
                            <li><Link className="link" to="/contact-us">Be a Seller</Link></li>
                        </ul>
                        <ul>
                            <li><Link className="link" to="">Facebook</Link></li>
                            <li><Link className="link" to="">Twitter</Link></li>
                            <li><Link className="link" to="">LinkedIn</Link></li>
                        </ul>
                        <ul>
                            <li><Link className="link" to="/about-us">About Us</Link></li>
                            <li><Link className="link" to="/contact-us">Create Your E-Store</Link></li>
                            <li><Link className="link" to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className="footer_footer">
                <p className="developer_details"> © Copyright Reserved <span className="mr-1 ml-1">|</span> <span> Developed By </span><Link className="company_name" to="/about-us">Storestreak</Link>
                    <span className="made_in_india">Made In India </span> </p>
            </div>
        </div>


    )
}

export default Footer
