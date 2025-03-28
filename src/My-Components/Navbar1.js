import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar1.css';

export default function Navbar1() {
  return (
    // ----------------- SMALL NAV-BAR ---------------------
    <>
    <nav className="small-navbar">
      <ul>
        <li><Link to="/apply-cnic"><i className="fa-solid fa-id-card"></i>Apply for ID Card</Link></li>
        <li><Link to="/nicop"><i className="fa-solid fa-earth-americas"></i>NICOP</Link></li>
        <li><Link to="/frc"><i class="fa-solid fa-address-book"></i>Apply for FRC</Link></li>
        <li><Link to="/re-new-id"><i className="fa-solid fa-pen-to-square"></i>Re-new ID Card</Link></li>
        <li><Link to="/track-document"><i className="fa-solid fa-location-crosshairs"></i>Track Document</Link></li>
        <li><Link to="/report-lost-cnic"><i className="fa-solid fa-flag"></i>Report Lost ID</Link></li>
      </ul>
    </nav>
    </>
  );
}
