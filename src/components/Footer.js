import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Add this import statement
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: moyanethembelani@gmail.com</p>
          <p>Phone: (+27) 67-170-7279</p>
          <p>Phone: (+27) 63-324-5982</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com/thembelanimoyane" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://instagram.com/thembelanimoyane" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://tiktok.com/moyanebelah" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p><Link to="/about">Learn more about us</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
