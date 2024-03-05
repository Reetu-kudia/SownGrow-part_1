import React, { useState } from 'react';
import './SortingGame.css';
import video from './RImages/v1.mp4'; 
import RNavbar from './RNavbar';
import O1 from './RImages/O1.jpeg'; // Import the O1 image
import P1 from './RImages/P1.jpeg';
import E1 from './RImages/E1.webp';
import MD1 from './RImages/MD1.jpeg';
import M1 from './RImages/M1.jpeg';
import O2 from './RImages/O2.jpeg';
import P2 from './RImages/P2.webp';
import E2 from './RImages/E2.jpeg';
import E3 from './RImages/E3.webp';
import MD2 from './RImages/MD2.webp';
import M2 from './RImages/M2.jpeg';

const SortingGame = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Veg', category: 'Organic', imageUrl: O1 }, // Use the imported image directly
    { id: 2, name: 'Tire', category: 'Plastic', imageUrl: P1 },
    { id: 3, name: 'TV', category: 'Electronic', imageUrl: E1 },
    { id: 4, name: 'Mask', category: 'Medical', imageUrl: MD1},
    { id: 5, name: 'Car', category: 'Metal', imageUrl: M1 },
    { id: 6, name: 'Food', category: 'Organic', imageUrl: O2 }, // Use the imported image directly
    { id: 7, name: 'Plastic-Bottle', category: 'Plastic', imageUrl: P2 },
    { id: 8, name: 'TVand More', category: 'Electronic', imageUrl: E2 },
    { id: 9, name: 'Tablets', category: 'Medical', imageUrl: MD2},
    { id: 10, name: 'Truck', category: 'Metal', imageUrl: M2 },
    { id: 11, name: 'Wire', category: 'Electronic', imageUrl: E3 },
    // Add more items with their respective categories and image URLs
  ]);

  const [bins, setBins] = useState({
    Organic: [],
    Plastic: [],
    Metal: [],
    Electronic: [],
    Medical: [],
  });

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('item', JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, category) => {
    const droppedItem = JSON.parse(event.dataTransfer.getData('item'));
    
    if (droppedItem.category === category) {
      const updatedItems = items.filter((item) => item.id !== droppedItem.id);
      const updatedBins = { ...bins, [category]: [...bins[category], droppedItem] };
      setItems(updatedItems);
      setBins(updatedBins);
      const binElement = event.target.closest('.bin');
      const binImages = binElement.querySelectorAll('.bin-image');
      const numImages = binImages.length;
      const minHeight = 50 + numImages * 50; // Adjust the height dynamically based on the number of images
      binElement.style.minHeight = `${minHeight}px`;
      alert(`Correct sorting! ${droppedItem.name} belongs in ${category} bin.`);
    } else {
      alert(`Incorrect sorting! ${droppedItem.name} does not belong in ${category} bin.`);
    }
  };

  return (
    <div>
    <RNavbar/>
   
    <div className="sorting-game">
    
      <h1>Sorting Game</h1>
      {/* Background video */}
   
    
      <div className="bins">
        {Object.keys(bins).map((category) => (
          <div
            key={category}
            className="bin"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, category)}
          >
          {/* Background video */}
    
    
            {category} Bin
            <div className="bin-images">
              {bins[category].map((item) => (
                <img
                  key={item.id}
                  src={process.env.PUBLIC_URL + item.imageUrl}
                  alt={item.name}
                  className="bin-image"
                />
              ))}
            </div>
          </div>
        ))}
    
    
      </div>
      <div className="items">
        {items.map((item) => (
          <img
            key={item.id}
            src={process.env.PUBLIC_URL + item.imageUrl}
            alt={item.name}
            className="item"
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
          />
        ))}
      </div>
      {/* Background video */}
    <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
    <footer className='Rfooter'>
          <p>The sorting game is an interactive web application where users categorize 
          various items into bins representing different materials like Organic, Plastic,
           Metal, Electronic, and Medical. Through drag-and-drop functionality and 
            users learn about proper waste sorting and recycling practices in an 
           engaging way.</p>
    </footer>
    </div>
    
  
    
  );
};

export default SortingGame;
