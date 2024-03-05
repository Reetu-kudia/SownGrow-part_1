import React, { useState } from 'react';
import './CHome.css';

function CHome() {
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = userData;

    // Validate if any field is empty
    if (!Name || !Email || !Subject || !Message) {
      alert('Please fill in all fields.');
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ Name, Email, Subject, Message })
    };

    try {
      const res = await fetch('https://react-firebase-auth-959e5-default-rtdb.firebaseio.com/Messages.json', options);
      console.log(res);
      alert('Message has been successfully sent!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="contact_box">
        <form>
          <input type="text" name="Name" value={userData.Name} placeholder="Enter your full name" autoComplete="off" onChange={data} />
          <input type="email" name="Email" value={userData.Email} placeholder="Enter your Email Id" autoComplete="off" onChange={data} />
          <input type="text" name="Subject" value={userData.Subject} placeholder="Subject Of Message" autoComplete="off" onChange={data} />
          <textarea name="Message" value={userData.Message} placeholder="Enter Your Message" autoComplete="off" onChange={data} />
          <button onClick={send}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default CHome;
