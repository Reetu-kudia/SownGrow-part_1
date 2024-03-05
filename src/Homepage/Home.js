import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './logo.PNG';

const Home = () => {
  return (
    <div className="homepage">
      <div className="logo-container">
        <img src={logo} alt="Sow&Grow Logo" className="logo" />
      </div>
      <h2>Welcome to Our Website</h2>
      <div className="card-container">
        <div className="card">
          <h3>E-commerce</h3>
          <p>Explore our collection of eco-friendly products.</p>
          <Link to="/Ecommerce">Shop Now</Link> {/* Link to Ecommerce route */}
        </div>
        <div className="card">
          <h3>Waste Recycling</h3>
          <p>Learn how you can contribute to waste recycling.</p>
          <Link to="/Recycling">Get Involved</Link>
        </div>
        <div className="card">
          <h3>Tutorial</h3>
          <p>Discover tips and tutorials for sustainable living.</p>
          <Link to="/Tutorial">Learn More</Link>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <p>Have questions? Reach out to us!</p>
          <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
