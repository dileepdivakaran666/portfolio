import React from 'react'
import model from '../assets/model.jpg'
import { FaPhoneSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './About.css'

function About() {
  return (
  <>
    <div className='about-header'>
        <h1>About Me</h1>
        <h1 id='abt-h1'>About Me</h1>
    </div>
    <div className='ab-container'>
      <div className='ab-con-left'>
        <img className='ab-model' src={model} alt='dilee.jpg'/>
      </div>
      <div className='ab-con-right'>
        <p>Hello! I'm Dileep, a passionate Computer Engineering graduate and a skilled full-stack web developer. My journey in the world of technology began with a strong foundation in programming languages like Python, C, C++, and Java. Over time, I discovered my love for web development and have since honed my skills in both frontend and backend technologies.</p>
        <p>On the frontend, I specialize in building dynamic and responsive user interfaces using <strong>React</strong> and <strong>Angular</strong>. These frameworks allow me to create visually appealing and user-friendly applications that deliver a seamless experience. On the backend, I have extensive experience working with <strong>PostgreSQL</strong> and <strong>C#</strong>, ensuring that the applications I build are robust, secure, and efficient.</p>
        <p>Currently, I am expanding my skill set by diving into MongoDB and Express.js, which will enable me to develop more flexible and scalable applications using the MERN stack.</p>
        <p>Looking ahead, my ambition is to become an <strong>AI Specialist</strong> who collaborates closely with web technologies. I am fascinated by the potential of AI to transform the digital landscape, and I aspire to integrate AI-driven solutions into web applications to create smarter, more intuitive user experiences.</p>
        <section className='contact-container'>
        <h3><strong>Contact</strong> me</h3>
        <div className='contact-details'>
          <p>Email : 
            <a href='mailto:dileepdivakaran666@gmail.com' target="_blank" rel="noopener noreferrer">
            <IoMail/>dileepdivakaran666@gmail.com
            </a>
          </p>
          <p>Phone no : <a href="tel:+918113938201" target="_blank" rel="noopener noreferrer"> <FaPhoneSquare/>+918113938201</a></p>
        </div>
        </section>
      </div>
    </div>

  </>
    
  )
}

export default About