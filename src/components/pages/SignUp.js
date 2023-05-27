import React, { useState } from 'react';
import '../../App.css';

export default function SignUp() {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define an event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to server using fetch()
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
      .then((response) => {
        if (response.ok) {
          console.log('Signup successful');
        } else {
          console.error('Error signing up');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className='sign-up'>
      <h1>Sign Up</h1>

      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type='submit'>Submit</button>
    </form>
  );
}
