import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './Certification.css';

const Certification = () => {
  return (
    <div className="certification">
      <h4 className="certification-heading4">Achieved Excellence In</h4>
      <h1 className="certification-heading1">Certifications</h1>

      <div className="certification-container">
        <div className="certification-box">
          <h3 className="certification-box-heading">
            <FaCertificate /> Data Science Internship
          </h3>
          <div className="certification-item">
            <h3 className="certification-title">
              Ospyn Technologies, Thiruvananthapuram
            </h3>
          </div>
          {/* View Certificate Button */}
          <div className="buttons">
            <Link to="/Internship Certificate.pdf" target="_blank">
              <button className="view-certificate-button">View Certificate</button>
            </Link>
          </div>
        </div>

        <div className="certification-box">
          <h3 className="certification-box-heading">
            <FaCertificate /> Machine Learning through Python
          </h3>
          <div className="certification-item">
            <h3 className="certification-title">
              International Centre for Free and Open Source Solutions
            </h3>
          </div>
          {/* View Certificate Button */}
          <div className="buttons">
            <Link to="/ICFOSS_Certificate.pdf" target="_blank">
              <button className="view-certificate-button">View Certificate</button>
            </Link>
          </div>
        </div>

        <div className="certification-box">
          <h3 className="certification-box-heading">
            <FaCertificate /> Data Visualization using Power BI
          </h3>
          <div className="certification-item">
            <h3 className="certification-title">
              Additional Skill Acquisition Programme Kerala
            </h3>
          </div>
          {/* View Certificate Button */}
          <div className="buttons">
            <Link to="/powerBI certificate.pdf" target="_blank">
              <button className="view-certificate-button">View Certificate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
