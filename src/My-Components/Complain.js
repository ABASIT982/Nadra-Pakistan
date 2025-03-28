import React, { useState } from 'react';
import './Complain.css';

export default function Complain() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/complain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Complaint submitted successfully!');
        setFormData({ name: '', email: '', complaint: '' });
      } else {
        alert('An error occurred while submitting your complaint. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('An error occurred. Please check your connection and try again.');
    }
  };

  return (
    <>
    <div className="complain-page">
      <h1 className="page-title">Submit Your Complaint</h1>
      <div className="complain-container">
        <div className="complain-info">
          <h3>Contact Information</h3>
          <p>If you have any questions or need assistance, feel free to reach us at:</p>
          <ul>
            <li><i className="fa fa-phone"></i> Phone: 123-456-7890</li>
            <li><i className="fa fa-envelope"></i> Email: complaints@nadra.gov.pk</li>
            <li><i className="fa fa-map-marker"></i> Address: NADRA Head Office, Islamabad, Pakistan</li>
          </ul>
        </div>
        <div className="complain-form">
          <h3>Complaint Form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="complaint">Your Complaint</label>
            <textarea
              id="complaint"
              name="complaint"
              rows="5"
              value={formData.complaint}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <br /><br /><br /><br />  <br /><br /><br /><br />

    </>
  );
}
