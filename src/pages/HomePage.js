import React,{useState, useEffect} from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import ParticleBackground from './ParticleBackground';
import './HomePage.css'


import Banner from '../components/Banner'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Project from '../components/Project';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  function toTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibility)
    return ()=>{
      window.removeEventListener('scroll', toggleVisibility)
    }
  },[])

  return (
        <main>
          <ParticleBackground/>
        <FaArrowAltCircleUp
          className={`back-to-top ${isVisible ? 'visible' : '' }`} 
          onClick={toTop}
        />
        <Banner/>
        <Experience/>
        <Project/>
        <Education/>
        <Skills/>
        <About/>
        </main>
  )
}

export default HomePage