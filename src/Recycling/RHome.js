import React, { useState } from 'react';
import RNavbar from './RNavbar';
import EFooter from '../Ecommerce/EFooter';
import './RHome.css'; // Import CSS file for RHome component

function RHome() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    landmark: '',
    pincode: '',
    collectionTime: '',
    wasteDetails: '',
    message: '', // New field for message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const { firstName,lastName, email,phone,address,city,landmark,pincode,collectionTime,wasteDetails,message} = formData;
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ firstName,lastName, email,phone,address,city,landmark,pincode,collectionTime,wasteDetails,message })
    };

    try {
      const res = fetch('https://react-firebase-auth-959e5-default-rtdb.firebaseio.com/Recycle.json', options);
      console.log(res);
      alert('Message has been successfully sent!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }

    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      landmark: '',
      pincode: '',
      collectionTime: '',
      wasteDetails: '',
      message: '',
    });
  };

  return (
    <div className="rhome-container">
      <RNavbar />
      <div className="mission-box">
        <h2>Our Mission: Wet Waste Collection</h2>
        <p>
          At Sow&Grow, we are dedicated to promoting sustainable waste management practices.
          Our mission behind wet waste collection is to minimize environmental pollution and promote recycling
          efforts. Wet waste, including organic materials like food scraps and garden waste, can be composted
          and converted into valuable resources like nutrient-rich soil conditioners. By collecting wet waste
          separately, we aim to divert it from landfills and utilize it for composting, and contributing to a healthier planet.
        </p>
      </div>
      <form className="waste-collection-form" onSubmit={handleSubmit}>
        <h2 className='RContribute'>Waste Collection Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Bangalore">Bangalore</option>
          {/* Add more cities as needed */}
        </select>
</div>

        <div className="form-group">
          <label htmlFor="landmark">Landmark:</label>
          <input type="text" id="landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin Code:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="collectionTime">Collection Time:</label>
          <select id="collectionTime" name="collectionTime" value={formData.collectionTime} onChange={handleChange}>
          <option value="">Select Collection Time</option>
          <option value="Morning">Morning (9:00am - 11:00am)</option>
          <option value="Afternoon">Afternoon (1:00pm - 4:00pm)</option>
          <option value="Evening">Evening (5:00pm - 8:00pm)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="wasteDetails">Waste Details:</label>
          <input type="text" id="wasteDetails" name="wasteDetails" value={formData.wasteDetails} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <EFooter/>
    </div>
  );
}

export default RHome;
