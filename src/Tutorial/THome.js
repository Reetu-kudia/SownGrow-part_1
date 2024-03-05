import React from 'react';
import './Thome.css'; 
import { Link } from 'react-router-dom';
import Tnavbar from './Tnavbar';
import EFooter from '../Ecommerce/EFooter';
const THome = () => {
  return (
    <div className='THome'>
      <Tnavbar/>
      <h2>Tutorials</h2>
      <div className="Tcontainer">
        <div className="Tcard">
          <h3>Articles</h3>
          <p>Read the latest articles about planting and wet waste recycling.</p>
          <Link to="/article">Article</Link>
        </div>
        <div className="Tcard">
          <h3>Videos</h3>
          <p>Watch informative videos about planting and wet waste recycling.</p>
          <Link to="/video">Video</Link> 
        </div>
      </div>
      
      
  <p className='PT'>Sow&Grow Nursery offers insightful articles on sustainable 
  gardening practices and informative videos showcasing tips for plant care and 
  eco-friendly gardening techniques.</p>

<div className='Tfooter'>
      <EFooter/>
      </div>
    </div>
  );
};

export default THome;
