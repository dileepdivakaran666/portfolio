import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import './Experience.css'

function Experience() {
  return (
    <>
    <div className='experience-header'>
        <h1>Experience</h1>
        <h1 id='exp-h1'>Experience</h1>
    </div>
    <div className='exp-container'>
        <table>
          <tr>
          <th colSpan={2}>Software Developer</th>
          </tr>
          <tr>
            <td>Company</td>
            <td>: Telecomatics Technologies</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>: 1 year</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>: 04/11/2022 to 30/11/2023</td>
          </tr>
        </table>
        {/* <h4><span>Company &nbsp; :</span> &nbsp; Telecomatics Technologies</h4>
        <h4><span>Duration &nbsp; :</span>&nbsp; 1 Year</h4>
        <h4><span>Date &nbsp; :</span>&nbsp; 04/11/2022 &nbsp;-&nbsp; 30/11/2023</h4> */}
        <div className='telecom-works'>
          <h1>Iceberg</h1>
          <ul className='exp-list1'>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Contributed to the development of the &nbsp; <span><strong>'Iceberg'</strong></span>&nbsp; web application using <span>Angular</span>, <span>.NET</span>, and the <span>NgZoro</span>&nbsp;
            framework.</li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Collaborated across the full software development lifecycle, from conceptualization to deployment,
            working closely with cross-functional teams.</li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Optimized the existing codebase and integrated new features to enhance performance and user
            satisfaction.</li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Ensured high-quality code by adhering to best practices, implementing rigorous testing, and debugging
            processes.</li>
          </ul>
        </div>
        <div className='telecom-works'>
          <h1>Wim_Track</h1>
          <ul className='exp-list1'>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Contributed to the development of the &nbsp; <span><strong>'Wim-Track'</strong></span>&nbsp; Desktop application for Railway using <span>Winforms</span> and<span> SqlServer</span></li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Collaborated across the full software development lifecycle, from conceptualization to deployment,
            working closely with cross-functional teams.</li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Optimized the existing codebase and integrated new features to enhance performance and user
            satisfaction.</li>
            <li><FaArrowAltCircleRight style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Ensured high-quality code by adhering to best practices, implementing rigorous testing, and debugging
            processes.</li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Experience