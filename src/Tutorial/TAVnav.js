import React from 'react';
import { Link } from 'react-router-dom';
import './TAVnav.css'; // Import CSS file

function TAVnav() {
  return (
    <nav className="TAVnav">
      <ul className="TAVnav-list">
        <li className="TAVnav-item">
          <Link to="/Tutorial/THome" className="TAVnav-link">Back to Tutorials</Link> {/* Link to THome */}
        </li>
      </ul>
    </nav>
  );
}

export default TAVnav;
