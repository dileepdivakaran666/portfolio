import React from 'react'
import jct1 from '../assets/jct1.jpg'
import gptc from '../assets/gptc.jpg'
import plus2 from '../assets/plus2.jpg'
import sslc from '../assets/sslc.jpg'
import './Education.css'

function Education() {
  return (<>
    <div className='edu-header'>
        <h1>Education</h1>
        <h1 id='edu-h1'>Education</h1>
    </div>
        <div className='edu-list'>
            <h2>B.E Computer Science</h2>
                <div className='edu-li-item'>
                    <div className='edu-item'>
                    <h4>Jct College Of Engineering And Technology Coimbatore</h4>
                    <p className='course-date'>Duration &nbsp; : &nbsp; 07/2018 - 04/2021</p>
                    <p className='course'>Course &nbsp; : &nbsp; Computer Science</p>
                    </div>
                    <div className='c-img'> <img className='c-img-item' src={jct1} alt='Engineering college'/></div>
                </div>
                <h2>Diploma In Computer Engineering</h2>
                <div className='edu-li-item'>
                    <div className='edu-item'>  
                    <h4>Goverment Politechnic College Vandiperiyar</h4>
                    <p className='course-date'>Duration &nbsp; : &nbsp; 07/2013 - 04/2013</p>
                    <p className='course'>Course &nbsp; : &nbsp; Computer Technology</p>
                    </div>
                    <div className='c-img'> <img className='c-img-item' src={gptc} alt='Engineering college'/></div>
                </div>
                <h2>Plus Two</h2>
                <div className='edu-li-item'>
                <div className='edu-item'>
                <h4>St:Sebastian's Higher Secondary's School Cheenthalar</h4>
                    <p className='course-date'>Duration &nbsp; : &nbsp; 07/2011 - 04/2013</p>
                    <p className='course'>Course &nbsp; : &nbsp; Science</p>
                </div>
                <div className='c-img'> <img className='c-img-item' src={plus2} alt='Engineering college'/></div>
                </div>
                <h2>SSLC</h2>
                
                <div className='edu-li-item'>
                    <div className='edu-item'>
                    <h4>St:Sebastian's Higher Secondary's School Cheenthalar</h4>
                    <p className='course-date'>Duration &nbsp; : &nbsp; 07/2010 - 04/2011</p>
                    </div>
                    <div className='c-img'> <img className='c-img-item' src={sslc} alt='Engineering college'/></div>
                </div>
        </div>
        </>
  )
}

export default Education