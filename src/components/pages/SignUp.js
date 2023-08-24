import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', {
        firstName,
        lastName,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
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
