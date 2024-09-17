import React, { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { FaFacebook, FaInstagramSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa";
import './Banner.css'

function Banner() {
    const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState('auto');

  useEffect(() => {
    const updateTextWidth = () => {
      if (textRef.current) {
        setTextWidth(textRef.current.scrollWidth + 7);
      }
    };

    updateTextWidth();

    // Optionally add a resize listener for responsiveness
    window.addEventListener('resize', updateTextWidth);
    return () => {
      window.removeEventListener('resize', updateTextWidth);
    };
  }, [textRef,textWidth]);
  return (
    <div className='banner'>
        <div className='ban-left'>
            <div className='ban-left-content'>
                <h2>Hello,</h2>
                <h1 className='name-dil'>I'm <span>Dileep</span></h1>
                <h2 ref={textRef}
                    style={{ '--typing-width': `${textWidth}px` }}
                    className='full-stack'>Fullstack Developer</h2>
                <p className='discription'>A Full Stack Developer specializing in designing and building comprehensive solutions that align with business goals and user needs. With expertise in both front-end and back-end technologies, delivering scalable, high-quality code with a focus on performance and security. Explore the portfolio to see how cutting-edge technology is used to drive innovation and achieve results.</p>
                
                
                
                  <div className='social-media'>
                    <motion.div whileHover={{ scale: 1.8 }}>
                    <a href="https://www.linkedin.com/in/dileep-divakaran-4a2104248/" target="_blank" rel="noopener noreferrer" >
                      <div className='icon-container'>
                        <FaLinkedin className='s-icon'/>
                      </div>
                    </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.8 }}>
                    <a href='https://www.instagram.com/dra_con_ian/' target="_blank" rel="noopener noreferrer"> 
                      <div className='icon-container'>
                        <FaInstagramSquare className='s-icon'/> 
                      </div>
                    </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.8 }}>
                    <div className='icon-container'>
                      <FaFacebook className='s-icon'/>
                    </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.8 }}>
                    <a href='https://x.com/dileeDiva' target="_blank" rel="noopener noreferrer">
                      <div className='icon-container'>
                        <FaTwitterSquare className='s-icon'/>
                      </div>
                    </a>
                    </motion.div>
                  </div>

                
            </div>
        </div>
        <div className='ban-right'>

        </div>
    </div>
  )
}

export default Banner
