import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './EFooter.css';

const EFooter = () => {
  return (
    <footer className="Efooter">
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__copyright">&copy; Sow&Grow</p>
        </div>
        <div className="footer__right">
          <ul className="social-links">
            <li className="social-links__item">
              <a href="https://www.instagram.com/sow_grow_nursery/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <i className="fab fa-instagram" /> Instagram
              </a>
            </li>
            <li className="social-links__item">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <i className="fab fa-facebook-f" /> Facebook
              </a>
            </li>
            <li className="social-links__item">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <i className="fab fa-twitter" /> Twitter
              </a>
            </li>
            <li className="social-links__item">
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <i className="fab fa-google" /> Google
              </a>
            </li>
            <li className="social-links__item">
              <a href="https://www.youtube.com/channel/UC4zILVKvLkS89CiO5cuntpw" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <i className="fab fa-youtube" /> Youtube
              </a>
            </li>
            <li className="social-links__item">
              {/* Use Link component for internal navigation */}
              <Link to="/Contact" className="social-links__link">
                <i className="fab fa-contact" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default EFooter;
