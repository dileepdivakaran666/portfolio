import React from "react";
import { motion } from "framer-motion";
import govaga from '../assets/gvaga.png'
import portfolio from '../assets/portfolio.png'
import blogsite from '../assets/blogsite.png'
import brain from '../assets/braintumor.jpeg'
import "./Project.css"; // Create a separate CSS file for styling

const projects = [
 
  {
    title: "goVagamon Booking Website",
    description: "An e-commerce platform connecting tourists with resorts and homestays in Vagamon.",
    techStack: ["MERN Stack", "React", "Express", "MongoDB"],
    image: govaga, // Replace with actual image path
    link: "https://govagamon.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    techStack: ["React", "CSS", "Framer Motion"],
    image: portfolio, // Replace with actual image path
    link: "dileepdivakaran666.github.io/portfolio/",
  },
  {
    title: "MERN Stack Blog App",
    description: "A full-stack blog application allowing users to create, edit, and delete blog posts.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    image: blogsite, // Replace with actual image path
    link: "https://dcodeblog.netlify.app/",
  },
  {
    title: "Brain Tumor Prediction System",
    description: "A machine learning model to analyze MRI images and detect brain tumors.",
    techStack: ["Python", "TensorFlow", "Anaconda"],
    image: brain, // Replace with actual image path
    link: "https://github.com/yourusername/brain-tumor-prediction",
  }
];

const Projects = () => {
  return (<>
    <div className='skill-header'>
    <h1>Projects</h1>
    <h1 id='skill-h1'>Projects</h1>
    </div>
    <div className="projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
