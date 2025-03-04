import React from 'react'
import model from '../assets/dilee.jpg'
import { NavLink } from 'react-router-dom'
// import ParticleBackground from '../pages/ParticleBackground'
import { FaArrowRight } from "react-icons/fa6";

import './About.css'

function About() {

  function toggleReadMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Show more text
        btnText.innerHTML = "...Read Less"; // Change button text
    } else {
        moreText.style.display = "none"; // Hide text
        btnText.innerHTML = "Read more..."; // Change button text back
    }
}

  return (
  <>
  {/* <ParticleBackground/> */}
    <div className='about-header'>
        <h1>About Me</h1>
        <h1 id='abt-h1'>About Me</h1>
    </div>
    <div className='ab-container'>
      <div className='ab-con-left'>
        <img className='ab-model' src={model} alt='dilee.jpg'/>
      </div>
      <div className='ab-con-right'>
        <p>Hello! I'm Dileep, a passionate Computer Engineering graduate and a skilled full-stack web developer. My journey in the world of technology began with a strong foundation in programming languages like <strong>Python</strong> , <strong>C</strong>, <strong>C++</strong>, and <strong>Java</strong>. Over time, I discovered my love for web development and have since honed my skills in both frontend and backend technologies.<br />
          <span id="more">
          On the frontend, I specialize in building dynamic and responsive user interfaces using <strong>React</strong> and <strong>Angular</strong>. These frameworks allow me to create visually appealing and user-friendly applications that deliver a seamless experience. On the backend, I have extensive experience working with <strong>PostgreSQL</strong> and <strong>C#</strong>, ensuring that the applications I build are robust, secure, and efficient.<br />
          Currently, I am expanding my skill set by diving into MongoDB and Express.js, which will enable me to develop more flexible and scalable applications using the MERN stack.<br />
          Looking ahead, my ambition is to become an <strong>AI Specialist</strong> who collaborates closely with web technologies. I am fascinated by the potential of AI to transform the digital landscape, and I aspire to integrate AI-driven solutions into web applications to create smarter, more intuitive user experiences.
          </span>
          <button id="readMoreBtn" onClick={toggleReadMore}>Read more...</button>
        </p>
        <section className='contact-container'>    
          <NavLink to="/contactme">
            <button className='contact-btn'><span style={{marginRight : 10, whiteSpace: 'nowrap'}}>Contact Me </span><FaArrowRight/></button>
          </NavLink>
        </section>
      </div>
    </div>

  </>
    
  )
}

export default About