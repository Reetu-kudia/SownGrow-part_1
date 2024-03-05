import React from 'react';
import { Link } from 'react-router-dom';
import './RNavbar.css';

const RNavbar = () => {
  return (
    <nav className="r-navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/collection">Back to Collection</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default RNavbar;
