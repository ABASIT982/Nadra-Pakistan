import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
      <div className="logo"></div>
      <div className="logo-text">
        <p>Nadra</p>
        <p>Pakistan</p>
      </div>
      </div>
      <button className="menu-toggle" id="menu-toggle">☰</button>
      <ul className="nav-links" id="nav-links">
        <li>
          <Link to="/Dashboard"><i className="fa-solid fa-house" style={{ paddingRight: '5px' }}></i>Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/complain">Complain</Link>
        </li>
        <li>
          <Link to="/login" className="login-btn"><i className="fa-solid fa-user" style={{ paddingRight: '5px' }}></i>Login</Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
