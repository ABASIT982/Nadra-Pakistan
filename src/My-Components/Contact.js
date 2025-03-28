import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Your message has been sent successfully!'); // Show success message
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('An error occurred while sending your message. Please try again.'); // Show error message
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      alert('An error occurred. Please check your connection and try again.'); // Show error message
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/*---------------- Contact Information ------------------*/}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><i className="fa-solid fa-phone"></i> Phone: +92-123-456789</p>
          <p><i className="fa-solid fa-envelope"></i> Email: info@nadra.pk</p>
          <p><i className="fa-solid fa-map-marker-alt"></i> Address: NADRA Headquarters, Islamabad, Pakistan</p>
          <p><i className="fa-solid fa-clock"></i> Business Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
        </div>

        {/*----------------- Contact Form --------------------*/}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
