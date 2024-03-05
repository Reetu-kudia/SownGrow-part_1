// AboutUs.js

import React from 'react';
import './Aboutus.css';
import Navbar from './Navbar';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import EFooter from './EFooter';
const Aboutus = () => {
  return (
    <div className="about-us-container">
    <Navbar/>
      <h1><span className="plant-symbol">🌿</span>About Us</h1>
      <p>
      <h3> Sow&Grow E-commerce</h3>
      At Sow&Grow E-commerce, we are passionate about 
      promoting sustainable living through gardening and eco-conscious products.
      Our platform is dedicated to providing enthusiasts and green thumbs alike with 
      everything they need to embark on their green journey.
      </p>
      <p>
      <h3>Our Mission</h3>
      Our mission is to empower individuals to cultivate their own green spaces, 
      whether it's a backyard garden, urban balcony oasis, or indoor plant collection. 
      We believe that nurturing plants not only enhances
      the beauty of our surroundings but also contributes to a healthier planet.
      </p>
      <p>
      <h3>What We Offer</h3>
        <h4>Diverse Product Range:</h4> We offer a wide variety of eco-conscious products, 
        including seeds, fertilizers, gardening equipment, and live plants, sourced 
        from trusted suppliers committed to sustainability.

        <h4>Educational Resources:</h4> In addition to our products, we provide 
        educational resources, gardening tips, and expert advice to help our customers succeed 
        in their gardening endeavors. 
      </p>
      <p>
      <h3>Our Commitment to Sustainability</h3>
      Sustainability is at the core of everything we do.
      We strive to minimize our environmental footprint by implementing eco-friendly practices 
      throughout our operations, from packaging materials to shipping methods. Additionally, 
      we partner with organizations dedicated to environmental conservation and support initiatives 
      that promote biodiversity and habitat restoration.
      </p>
      
      <div className="images-container">
  <img src={img1} alt="1" />
  <img src={img2} alt="2" />
  <img src={img3} alt="3" />
</div>
<p>
      <h3>Get Involved</h3>
      Join us on our green journey! Whether you're a seasoned gardener or just getting started,
      Sow&Grow E-commerce is here to support you every step of the way. Together, let's sow the
      seeds of sustainability and watch them grow into a greener, more vibrant future.
      </p>
 <EFooter/>

    </div>
    
     
    
  );
};

export default Aboutus;
