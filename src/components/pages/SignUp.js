import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
// import './Button.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/signup', {
        firstName,
        lastName,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
