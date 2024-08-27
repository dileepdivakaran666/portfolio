import React from 'react'
import { ImRedo2 } from "react-icons/im";
import './Experience.css'

function Experience() {
  return (
    <>
    <div className='experience-header'>
        <h1>Experience</h1>
        <h1 id='exp-h1'>Experience</h1>
    </div>
    <div className='exp-container'>
        <h2>SoftWare Developer</h2>
        <h4><span>Company &nbsp; :</span> &nbsp; Telecomatics Technologies</h4>
        <h5><span>Duration &nbsp; :</span>&nbsp; 9 months</h5>
        <h5><span>Date &nbsp; :</span>&nbsp; 04/11/2022 &nbsp;-&nbsp; 31/8/2023</h5>
        <ul className='exp-list'>
          <li><ImRedo2 style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Contributed to the development of the 'Iceberg' web application using Angular, .NET, and the NgZoro
          framework.</li>
          <li><ImRedo2 style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Collaborated across the full software development lifecycle, from conceptualization to deployment,
          working closely with cross-functional teams.</li>
          <li><ImRedo2 style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Optimized the existing codebase and integrated new features to enhance performance and user
          satisfaction.</li>
          <li><ImRedo2 style={{margin: '8px', color: 'hsl(180, 100%, 50%)'}}/>Ensured high-quality code by adhering to best practices, implementing rigorous testing, and debugging
          processes.</li>
        </ul>
    </div>
    </>
  )
}

export default Experience