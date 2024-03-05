import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Tnavbar.css';
function Tnavbar() {
  return (
    <div>
      <nav className="Tnavbar">
        <ul className="Tnavbar-nav">
          <li className="Tnav-item">
            <Link to="/Home" className="Tnav-link">Back to Home</Link> {/* Use Link component */}
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Tnavbar;
