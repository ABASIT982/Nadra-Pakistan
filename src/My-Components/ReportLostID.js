import React, { useState } from 'react';
import axios from 'axios';
import './ReportLostID.css';

export default function ReportLostID() {
  const [formData, setFormData] = useState({
    cnicNumber: '',
    fullName: '',
    contactNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/report-lost-cnic', formData);
      alert(response.data.message); 
    } catch (error) {
      console.error("Error reporting lost CNIC:", error);
      alert("There was an error reporting your lost CNIC.");
    }
  };

  return (
    <div className="report-page">
      <h1 className="page-title">Report Lost CNIC</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="cnic-number">CNIC Number</label>
          <input
            type="text"
            id="cnic-number"
            name="cnicNumber"
            placeholder="Enter your CNIC number"
            value={formData.cnicNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-number">Contact Number</label>
          <input
            type="tel"
            id="contact-number"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Current Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Report Lost CNIC</button>
        </form>
      </div>
    </div>
  );
}
