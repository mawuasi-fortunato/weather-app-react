import React from "react";
import './Footer.styles.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-container">
        <p>Developed by <strong>Mawuasi Fortunato</strong></p>
        <a
          href="https://www.linkedin.com/in/mawuasi/"
          target="blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mawuasi-fortunato"
          target="blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
  </div>)
};

export default Footer;