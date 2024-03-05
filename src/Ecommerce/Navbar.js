import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../Homepage/Home';

const Navbar = () => {
  const handleProductsClick = () => {
    window.location.href = 'http://localhost:3001/';
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Ecommerce/EHome" className="nav-link">Ecommerce</Link>
        </li>
        <li className="nav-item">
          <button onClick={handleProductsClick} className="nav-button">Products</button>
        </li>
        <li className="nav-item">
          <Link to="/Ecommerce/aboutus" className="nav-link">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
