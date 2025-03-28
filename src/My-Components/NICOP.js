import React, { useState } from 'react';
import axios from 'axios';
import './NICOP.css';

export default function NICOP() {
  const [searchId, setSearchId] = useState('');
  const [userData, setUserData] = useState(null);

  //--------------------- Handle search ---------------------
  const handleSearch = async () => {
    try {
      const endpoint = searchId.length === 13 ? 'cnic' : 'nicop'; 
      const response = await axios.get(`http://localhost:5000/api/${endpoint}/${searchId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
      alert("No data found for this CNIC/NICOP number.");
    }
  };

  //------------------- Handle form submission for NICOP application ----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("http://localhost:5000/api/nicop", data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting NICOP application:", error);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <>
    <div className="container1">
      <div className="form">
        <h1>National Identity Card for Overseas Pakistanis (NICOP)</h1>
        <p>
          National Identity Card for Overseas Pakistanis (NICOP) is issued to citizens of Pakistan who are residing abroad and are nationals of a country with a dual nationality arrangement with Pakistan.
          Any citizen of Pakistan can apply for NICOP and can travel to Pakistan without requiring a visa.
        </p>

        {/*---------------- Search Section ---------------------*/}
        <div className="search-section2">
          <input 
            type="text" 
            value={searchId} 
            onChange={(e) => setSearchId(e.target.value)} 
            placeholder="Enter CNIC or NICOP number to search" 
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/*------------------------- Eligible Countries and Categories ----------------------*/}
        <h2>Eligible Countries</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>S No</th>
                <th>Name of Country</th>
                <th>S No</th>
                <th>Name of Country</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Australia</td><td>2</td><td>New Zealand</td></tr>
              <tr><td>3</td><td>Belgium</td><td>4</td><td>Sweden</td></tr>
              <tr><td>5</td><td>Saudi</td><td>6</td><td>Germany</td></tr>
              <tr><td>7</td><td>America</td><td>8</td><td>India</td></tr>
            </tbody>
          </table>
        </div><br/>

        <h2>Categories of Smart NICOP Application</h2>
        <ul>
          <li>New/Fresh</li>
          <li>Renewal</li>
          <li>Reprint</li>
          <li>Modification</li>
          <li>Modification in Non-Printable Field</li>
          <li>Cancellation</li>
        </ul>

        <h2>Apply for NICOP</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="fullName" placeholder="Enter your full name" required />
            
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
            {/* <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required /> */}
            
            <label htmlFor="country">Country of Residence</label>
            <select id="country" name="countryOfResidence" required>
              <option value="Select">Select</option>
              <option value="Australia">Australia</option>
              <option value="Belgium">Belgium</option>
              <option value="England">England</option>
              <option value="Dubai">Dubai</option>
              <option value="France">France</option>
              <option value="Saudi">Saudi Arabia</option>
            </select>

            <label htmlFor="cnic">CNIC/NICOP Number</label>
            <input type="text" id="cnic" name="cnicNicopNumber" placeholder="Enter your CNIC/NICOP Number" required />

            <label htmlFor="message">Additional Comments</label>
            <textarea id="message" name="additionalComments" rows="4" placeholder="Enter your message"></textarea>

            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>

              <div>
      {/*----------------- Show search result -------------------------*/}
      {userData && (
        <div className="user-data">
          <h3>User Information</h3>
          <p>Full Name: {userData.fullName}</p>
          <p>Email Address: {userData.email}</p>
          <p>CNIC/NICOP Number: {userData.cnicNicopNumber}</p>
          <p>Country of Residence: {userData.countryOfResidence}</p>
          <p>Additional Comments: {userData.additionalComments}</p> 
        </div>
      )}</div>
    </div>
    <br /><br /><br /><br /><br />    <br /><br /><br /><br /><br />
    </>
  );
}
