import React from 'react'
import './Footer.css'
import { FaLinkedin, FaPhone,FaFacebook, FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
    <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-column">
      <img src={logo} alt="logo.png"/>
      <h4>Dileep D.</h4>
      <p>Full Stack Web Developer</p>
    </div>
    
    <div class="footer-column footer-links">
      <h1>Social Links</h1>
      <ul>
        <li><a href="https://www.linkedin.com/in/dileep-d-4a2104248/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='s-icon'/>Linkedin</a></li>
        <li><a href="mailto:dileepdivakaran666@gmail.com"><IoMail className='s-icon'/>Gmail</a></li>
        <li><a href="tel:+918113938201"><FaPhone className='s-icon'/>Phone</a></li>
        <li><a href='https://www.facebook.com/dileep.divakaran.666/' target="_blank" rel="noopener noreferrer"><FaFacebook className='s-icon'/>Facebook</a></li>
        <li><a href='https://www.instagram.com/dra_con_ian/' target="_blank" rel="noopener noreferrer"><FaInstagramSquare className='s-icon'/>Instagram</a></li>
        <li><a href='https://x.com/dileeDiva' target="_blank" rel="noopener noreferrer"><FaTwitterSquare className='s-icon'/>Twitter</a></li>
      </ul>
    </div>

    <div class="footer-column footer-right">
      <p>&copy; 2024 Dileep D. All rights reserved.</p>
      <p>Designed & Built by Dileep D. using React</p>
    </div>
    
  </div>
</footer>
</>
  )
}

export default Footer