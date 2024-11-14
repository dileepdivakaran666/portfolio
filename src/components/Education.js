import React from 'react'
import './Education.css'
import {cardData} from '../data/data'

function Education() {
  return (<>
    <div className='edu-header'>
        <h1>Education</h1>
        <h1 id='edu-h1'>Education</h1>
    </div>

    <div className="card-container">
      {cardData.map((card) => (
        <div key={card.id} className="edu-card">
          <img src={card.image} alt={card.college} />
          <h2>{card.course}</h2>
          <p>{card.college}</p>
          <small>{card.duration}</small>
        </div>
      ))}
    </div>
    </>
  )
}

export default Education