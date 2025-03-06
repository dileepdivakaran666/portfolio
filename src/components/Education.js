import React from 'react'
import './Education.css'
import { motion } from "framer-motion";
import {cardData} from '../data/data'

function Education() {
  return (<>
    <div className='edu-header'>
        <h1>Education</h1>
        <h1 id='edu-h1'>Education</h1>
    </div>

    <div className="card-container">
      {cardData.map((card) => (
        <motion.div
        className="edu-card"
        key={card.id}
        initial={{ opacity: 0, x: -100, rotate: 45 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: card.id * 0.3 }}
        viewport={{ once: true }}
      >
          <img src={card.image} alt={card.college} />
          <h2>{card.course}</h2>
          <p>{card.college}</p>
          <small>{card.duration}</small>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default Education