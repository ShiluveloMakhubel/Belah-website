import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src="/images/logo2.png" alt="Website Logo" className="logo-image" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
