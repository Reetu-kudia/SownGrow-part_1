import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import EFooter from './EFooter';
import './EHome.css'; // Import CSS file
import E1 from './Images/E1.jpeg'; // Import image files
import E2 from './Images/E2.jpg';
import E3 from './Images/E3.webp';

function EHome() {
  // Array of image paths
  const images = [E1, E2, E3];

  // State to track the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to update the image index at regular intervals
  useEffect(() => {
    // Function to increment the image index
    const incrementImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to change the image every 3 seconds (adjust as needed)
    const intervalId = setInterval(incrementImageIndex, 3000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [images.length]); // Re-run effect when the number of images changes

  return (
    <div>
    <div className='Ecommerce'>
      <Navbar />
      <div className='welcome-container'>
        <h2>Embrace the green journey with Sow&Grow E-commerce!</h2>
        <p>Offering a diverse range of eco-conscious products including seeds, fertilizers, 
        gardening equipment, and plants for enthusiasts and green thumbs alike.</p>
      </div>
      <div className="image-container">
        {/* Render the currently displayed image */}
        <img src={images[currentImageIndex]} alt="E-commerce Product" />
      </div>
      
    </div>
    <EFooter/>
    </div>
  );
}

export default EHome;
