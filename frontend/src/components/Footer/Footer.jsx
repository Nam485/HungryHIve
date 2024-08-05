import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" width={"50%"}/>
                <p>Welcome to Hungry Hive, your premier destination for fast, fresh, and convenient food delivery. Whether you're craving a hearty meal, a light salad, or a sweet treat, we've got you covered. Our easy-to-use app connects you with a variety of local restaurants and cuisines, delivering your favorite dishes right to your doorstep. Enjoy delicious meals prepared with care and delivered with speed, ensuring that every bite is a delight. With real-time tracking, seamless payment options, and personalized recommendations, dining has never been this effortless. Experience the joy of great food, delivered. </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8890758025</li>
                    <li>contact@hungryhive.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © hungryhive.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
