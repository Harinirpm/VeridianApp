import React from 'react'
import './ContactUs.css';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Divider } from '@mui/material';
function ContactUs() {
  return (
    <div className='contact'>
      <div className='contactUs-container'>
        <div className='contact-header'>
      <h1>ContactUs</h1>
        </div>
        <div className='contact-content'>
          <p>Have questions or need more information? Reach out to us at.</p>
        </div>
        {/* send mail */}
        <div className='btn-container'>
        <div className='mail-content'>
        <p className='mini-mail'>MAIL TO</p>
          <button className='contact-btn'>
           info@varidian.com
            </button>
        </div>
            <HiArrowNarrowRight className='btn-icon'/>
            </div>
            <div className='footer-para'>
            <p className='footer-para'>We're here to help</p>
            </div>
      </div>
      <Divider width="100%" sx={{color:"gray",mt:"70px",}} />
      <div className='policy-content'>
        <div>
          <p>COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</p>
      </div>
      <div>
        <p style={{fontSize:"14px"}}>Privacy Policy</p>
      </div>
      </div>
    </div>
  ) 
}

export default ContactUs
