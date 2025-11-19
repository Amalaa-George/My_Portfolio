import React from 'react';
import { FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h4 className="skills-heading4">My Core</h4>
      <h1 className="skills-heading1">Skills</h1>

      <div className="skills-technical">
        <h2 className="skills-title">
          <FaTools /> Technical Skills
        </h2>
        <div className="skills-list">
          <h3 className="skills-category">Languages:</h3>
          <ul className="skills-items">
            <li>Python</li>
            <li>HTML</li>
             <li>SQL</li>

          </ul>

          <h3 className="skills-category">Data Analysis & Visualization:</h3>
          <ul className="skills-items">
            <li>Tableau</li>
            <li> Matplotlib</li>
            <li> Seaborn</li>
            <li> Plotly</li>
            <li>Excel</li>
            <li> Pandas</li>
            <li> NumPy</li>
            
          </ul>

          <h3 className="skills-category"> Machine Learning & Deep Learning:</h3>
          <ul className="skills-items">
            <li>TensorFlow</li>
            <li> Neural Networks</li>
            <li> Supervised & Unsupervised Learning</li>
            <li> CNNs</li>
            <li>Transfer Learning</li>
            <li> NLP</li>
            <li> Computer Vision</li>
            
          </ul>

          <h3 className="skills-category">Tools & Frameworks:</h3>
          <ul className="skills-items">
            <li>Git/GitHub</li>
            <li>Jira</li>
            <li>VSCode</li>
            <li>Jupyter Notebook</li>
            <li>Google Colab</li>
            <li>Kaggle</li>
            <li>Flask</li>
            <li>LangChain</li>
            <li>RAG</li>
            <li>ChromaDB</li>

          </ul>
        </div>
      </div>

      <div className="skills-soft">
        <h2 className="skills-title">
          <FaTools /> Soft Skills
        </h2>
        <div className="skills-list">

          <ul className="skills-items">
            <li>Communication & Collaboration</li>
            <li>Storytelling with Data</li>
            <li>Time Management</li>
            <li>Adaptability & Continuous Learning</li>
            <li>Problem Solving</li>
            <li>Initiative & Ownership</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
