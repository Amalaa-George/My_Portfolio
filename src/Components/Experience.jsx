import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      role: 'Intern',
      company: 'Ospyn Technologies, Thiruvananthapuram',
      duration: 'March 2025 - June 2025',
      description:
        'Worked on text extraction using Tesseract OCR and the preprocessing pipeline for reliable data handling. Developed a RAG-based chatbot for M.Tech admission queries using Meta LLaMA-3 8B, significantly improving contextual response accuracy and user experience.'
    }
  ];

  return (
    <div className="experience">
      <h4 className="experience-heading4">Career Journey</h4>
      <h1 className="experience-heading1">Experience</h1>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h2 className="experience-title">
            <FaBriefcase /> {exp.title}
          </h2>
          <h3 className="experience-role">{exp.role} | {exp.company}</h3>
          <h4 className="experience-duration">{exp.duration}</h4>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
