import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
      agree,
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Signup successful!');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="signup">
          <h2>Signup Here</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="firstname"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="lastname"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="checkBox">
              <input
                className="chk-box"
                type="checkbox"
                id="agree"
                name="agree"
                style={{ height: '15px' }}
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              /></div>
              <div className="text">
              <label className="agree-text" htmlFor="agree">
                I agree to the user <a href="#">policy</a>
              </label>
              </div>
            <button type="submit" className="signup-button">Signup</button>
          </form>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
