

import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
        <div className='footer-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, iste consectetur harum animi mollitia quis in esse explicabo ipsum!</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className='footer-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-22-336-598</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; Tomato.com - All Right </p>
    </div>
  )
}

export default Footer