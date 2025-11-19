import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const add = 'Amala George';
  const mail = 'Machine Learning Engineer | AI Developer | Data Science Enthusiast';
  const num = 'Transforming raw data into prediction, automation, and real-world impact.';

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <img className="home-img" src="/image0.jpg" alt="Amala George" />
        <div className="head">
          <h3 className="home-heading3">{add}</h3>
          <h1 className="home-heading1">{mail}</h1>
          <h2 className="home-heading2">{num}</h2>
          <div className="buttons">
            <Link to="/Resume_AmalaGeorge.pdf" target="_blank" download>
              <button className="downloadcv-button">Download Resume</button>
            </Link>
            <Link to="/contact">
              <button className="contact-button">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
