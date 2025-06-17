import React from 'react'
import footer_logo from '../../assets/stripe.png'
import user_icon from '../../assets/stripe.png'
import './Footer.css'
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className='footer'>
        <div class="footer-top">
            <div class="footer-top-left">
                <img src={footer_logo} alt="" width={40}/>
                <p>I'm Arun Babu Subramanian</p>
            </div>
            <div class="footer-top-right">
                <div class="footer-email-input">
                    <IoMdMail size={24} style={{ marginRight: "8px", color:"black" }} />
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div class="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div class="footer-bottom">
            <p class="footer-bottom-left">Copyright © 2021 Arun Babu Subramanian</p>
            <div class="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer