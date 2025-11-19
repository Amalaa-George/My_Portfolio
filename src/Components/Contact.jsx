import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading1">Contact</h2>
      <p className="contact-heading4">Feel free to reach out to me via any of the platforms below:</p>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://wa.me/7736493641" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/amala-george-b1b0302bb/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Amalaa-George" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

    
    </section>
  );
};

export default Contact;
