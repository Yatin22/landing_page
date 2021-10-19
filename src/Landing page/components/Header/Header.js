import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import whiteLogo from '../../images/base/logo_white.png'
import BlueLogo from '../../images/base/logo_blue.png'
import { useState } from 'react';
function Header() {
    const [ClassSidebar, setClassSidebar] = useState("sidebar")
    const [open, setopen] = useState({display:"block"})
    const [close, setclose] = useState({display:"none"})
   
    // This is for side navbar phone
    const control_side_navbar=()=>{
        if(ClassSidebar ===("sidebar")){
            side_navbar_toggle_open()
            // console.log("hello")
        }
        else{
            side_navbar_toggle_close()
        } 
    }
    const side_navbar_toggle_open=()=>{
        setClassSidebar("sidebarWhileOpen sidebar")
        setclose({
            display : "block",
        })
        setopen({
            display:"none"
        })
        
    
    }
    
    const side_navbar_toggle_close=()=>{
       setClassSidebar("sidebar")
        setopen({
            display : "block",
        })
        setclose({
            display:"none"
        })
    }
    return (
      <>
        <div className="navigation">
        {/* <!----------------------------pc_header starts here--------------------------------------> */}
        <header className="main_pc_header">
            <div className="logo">
                <div className="header_logo">
                    <img src={whiteLogo} alt="logo"/>
                </div>
            </div>
            <nav className="pc_header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="/customer/customer-login">Login</a></li>
                    <li><a href="/customer/customer-signup" >Signup</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        {/* <!----------------------------pc_header ends here--------------------------------------> */}
        <div className="mobile_bar">
        <div className="logo_mobile">
            <div className="header_logo_mobile">
                    <img src={whiteLogo} alt="logo"/>
            </div>
        </div>
        <div className="ham">
            <span id="open" className="hamicon_down" 
            
            onClick={control_side_navbar} style={open}>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg></span>

            <span id="close" className="hamicon_down" onClick={control_side_navbar} style={close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
        </div>
        </div>
    </div>
    {/* <!----------------------sidebar starts here-------------------------> */}
    <div className={ClassSidebar} id="side_nav_bar">


        <div className="test">
            <div className="sidebar_company">
                <img src={BlueLogo} alt="logo"/>
            </div>
             <ul className="sidebar_mobile">
                 <Link to="/">
                <li>
                    <span className="sidebar_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </span>
                    <span className="text"> Home</span>
                  </li>
                </Link>
                    <a href="/customer/customer-login">
                         <li>
                            <span className="sidebar_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </span>
                            <span className="text">Login</span>
                        </li>
                    </a>


                    <a href="/customer/customer-signup" >
                         <li>
                            <span className="sidebar_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </span>
                            <span className="text">Signup</span>
                        </li>
                    </a>
                <Link to="/about">
                <li>
                    <span className="sidebar_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                    </span>
                    <span className="text">About Us</span>
                </li>
                </Link>

                <li>
                    <Link to="/contact">
                    <span className="sidebar_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                    </span>
                    <span className="text">Contact Us</span>
                    </Link>
                </li>

            </ul>
            <div className="nav_footer">
                <div className="nav_footer_1">
                </div>
                <div className="nav_footer_2">
                    <h1>Storestreak</h1>
                    <p>&#169 2021 A product By Storestreak</p>
                    <p><span className="made_in_india">Made In India </span> </p>
                </div>
            </div>
        </div>


    </div>
    {/* <div className="">
        {% block content %} {% endblock %}
    </div> */}
        </>

    )
}

export default Header
