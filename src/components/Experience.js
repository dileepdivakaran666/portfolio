import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "MERN Stack Developer trainee",
    company: "Zoople Technologies",
    duration: "Present",
    year: "2024",
    description: "Building full-stack web applications, including goVagamon and a blog app.",
  },
  {
    role: "Software Developer",
    company: "Telecomatics Technologies",
    duration: "10 months",
    year: "2022-2023",
    description: "Developed a railway project for secure data storage and worked on Angular and .NET applications.",
  },
];

const Experience = () => {
  return (<>
  <div className='skill-header'>
    <h1>Experience</h1>
    <h1 id='skill-h1'>Experience</h1>
    </div>
    <div className="experience-section">
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1,scale: 1, x:0}}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: index * 0.2, type: "spring", velocity: 10 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, transition:{duration:0} }}
          >
            <div className="card-content">
              <h2>{exp.role}</h2>
              <h3>{exp.company} • {exp.year}</h3>
              <small><strong>Duration:</strong> {exp.duration}</small>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
