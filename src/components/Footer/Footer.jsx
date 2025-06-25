import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-right">
          <a href="mailto:arunbabuks03@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <IoMdMail size={24} /> Email
          </a>
          <a href="https://github.com/arunbabuks007" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/arun-babu-k-s" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaFilePdf size={24} /> Resume
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left" id="Connect">© 2025 Arun Babu Subramanian</p>
        <div className="footer-bottom-right">
          <a href="https://github.com/ArunBabuSubramanian/Portfolio-2020-master/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="footer-link">
            Terms of Services
          </a>
          <a href="https://github.com/ArunBabuSubramanian/Portfolio-2020-master/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="footer-link">
            Privacy Policy
          </a>
          <a href="https://github.com/ArunBabuSubramanian/Portfolio-2020-master" target="_blank" rel="noopener noreferrer" className="footer-link">
            Connect With Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
