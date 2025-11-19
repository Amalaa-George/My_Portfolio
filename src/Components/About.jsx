import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-overlay"></div>
      <h4 className="about-heading4">Get to know more</h4>
      <h1 className="about-heading1">About Me</h1>
      <div className="about-content">
        <img className="about-img" src="/image1.jpg" alt="Profile" />
        <p className="about-paragraph">
          Hello! I'm Amala,a Machine Learning Engineer and AI enthusiast who loves turning messy data 
          into intelligent, usable solutions.Whether it’s building deep learning models, experimenting 
          with new techniques, or creating real projects end-to-end, I enjoy every part of the process.
          My work spans deep learning, computer vision, NLP, and applied AI projects, with a strong 
          focus on practical implementation.
          I value continuous learning, meaningful work, and collaborating with people who are passionate 
          about technology.
        </p>
      </div>
    </div>
  );
};

export default About;
