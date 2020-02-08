import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__social-container">
      <a href="mailto:dvonanderson@gmail.com" target="_blank" rel="noopener noreferrer" className="airplane" aria-label="Email Devon if you have questions">
        <FontAwesomeIcon icon={faTelegramPlane} size="lg"/>
      </a>
      <a href="https://twitter.com/dsawebdev" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Check-out Devon's Twitter Page">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="https://linkedin.com/in/devon-s-anderson/" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="Check-out Devon's LInkedin Page">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://github.com/dsawebdev" target="_blank" rel="noopener noreferrer" className="github" aria-label="Check-out Devon's Github Page">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
    <div className="site-footer__cr-container">
      <p>&copy;2020 Devon Anderson for <span className="site-footer__cr-container__span"><span className="site-footer__cr-container__span-word">Red</span>Dragon Web</span>.  All rights reserved</p>
    </div>
  </footer>
)

export default Footer;
