import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login">
          <h2>Login Here</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="forgotButton">
            <Link className="forgotPassword" to="/">Forgot password?</Link>
            </div>
            <div className="loginButtonContainer">
            <button type="submit" className="login-button">Login</button>
            </div>
          </form>
          <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
