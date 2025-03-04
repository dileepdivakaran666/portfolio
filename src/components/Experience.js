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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{exp.role}</h3>
            <h4>{exp.company} • {exp.year}</h4>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
