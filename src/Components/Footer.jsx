import React from 'react'
 import footerlogo from '../Assets/logo.png'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import './Footer.css'

function Footer() {
  return (
    <div className=''>
        <div className='p-5'>
            <div className='footer-sections'>
                <div className='footer-images '><div><img style={{width:'100%'}} src= {footerlogo} alt="" /></div></div>
                <div className='footer-parts'>
                    <div>
                        <h6>Partnership</h6>
                        <ul style={{padding:"0px"}}>
                            <li>Website</li>
                            <li>Social Media</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-parts'>
                    <div>
                        <h6>About</h6>
                        <ul style={{padding:"0px"}}>
                            <li>Why</li>
                            <li>Our Work</li>
                            <li>Career</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-parts'>
                    <div>
                        <h6>Follow Us</h6>
                        <input className='get-us-input' placeholder='Enter your Email' type="text" />
                        <div><button className='get-us-button'>Subscribe</button></div>
                        <div className='footer-icons'>
                            <div><FaFacebook size={20}/></div>
                            <div><AiFillInstagram size={20}/></div>
                            <div><FaSquareXTwitter size={20}/></div>
                            <div><SiYoutubeshorts size={20}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
