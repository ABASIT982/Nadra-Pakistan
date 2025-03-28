import React, { useState } from 'react';
import axios from 'axios';
import './ApplyCNIC.css';

export default function ApplyCNIC() {
  const [parentCnic, setParentCnic] = useState('');
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    dateOfBirth: '',
    parentCnic: '',
    postalAddress: '',
    permanentAddress: '',
  });

  //---------------- Handle search when user enters Parent CNIC -------------------
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cnic/${parentCnic}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
    }
  };

  //----------------------- Handle form data change ----------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //----------------------- Handle form submission -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/cnic', formData);
      console.log(response.data);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting the application.');
    }
  };

  return (
    <>
      <br />
      <header className="cnic-header">
        <h1>Computerized National Identity Card (CNIC)</h1>
        <p>- - - Your information is Secured - - -</p>
         {/*----------------- Search Section --------------*/}
         <div className="search-section1">
          <input 
            type="text" 
            value={parentCnic} 
            onChange={(e) => setParentCnic(e.target.value)} 
            placeholder="Enter Parent CNIC to search" 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <section className="apply-cnic">
        {/* -------------------- left-section ------------------- */}
        <div className="left-section">
          <h2><i className="fa-solid fa-asterisk"></i>Requirements for CNIC</h2>
          <ul>
            <li>Original Birth Certificate or Matriculation Certificate</li>
            <li>Parent's CNIC copies</li>
            <li>Proof of residence</li>
            <li>Passport-size photographs</li>
            <li>Marriage certificate (if applicable)</li>
          </ul>
          <h2><i className="fa-solid fa-circle-info"></i>Instructions</h2>
          <p>Ensure all provided information is accurate. Any discrepancies may lead to rejection of your application.</p>
          <p>Upload clear, scanned copies of required documents.</p>
        </div>

        {/* ------------------------ right-section -------------------------- */}
        <div className="right-section">
          <h2>Apply for CNIC</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="full-name">Full Name:</label>
              <input 
                type="text" 
                id="full-name" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                placeholder="Enter your full name" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name:</label>
              <input 
                type="text" 
                id="father-name" 
                name="fatherName" 
                value={formData.fatherName} 
                onChange={handleInputChange} 
                placeholder="Enter your father's name" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input 
                type="date" 
                id="dob" 
                name="dateOfBirth" 
                value={formData.dateOfBirth} 
                onChange={handleInputChange} 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cnic">CNIC of Parent/Guardian:</label>
              <input 
                type="text" 
                id="cnic" 
                name="parentCnic" 
                value={formData.parentCnic} 
                onChange={handleInputChange} 
                placeholder="Enter CNIC of parent or guardian" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postel-address">Postel Address:</label>
              <textarea 
                id="postel-address" 
                name="postalAddress" 
                value={formData.postalAddress} 
                onChange={handleInputChange} 
                placeholder="Enter your postel address" 
                rows="3" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Permanent-address">Permanent Address:</label>
              <textarea 
                id="Permanent-address" 
                name="permanentAddress" 
                value={formData.permanentAddress} 
                onChange={handleInputChange} 
                placeholder="Enter your Permanent address" 
                rows="3" 
                required
              />
            </div>
            <button type="submit" className="btn-submit">Submit Application</button>
          </form>
        </div>

        {/*------------------ Display Search Results ---------------------*/}
        {userData && (
          <div className="user-data">
            <h3>User Information</h3>
            <p>Full Name: {userData.fullName}</p>
            <p>Father's Name: {userData.fatherName}</p>
            <p>Date of Birth: {userData.dateOfBirth}</p>
            <p>Parent CNIC: {userData.parentCnic}</p>
            <p>Postal Address: {userData.postalAddress}</p>
            <p>Permanent Address: {userData.permanentAddress}</p>
          </div>
        )}
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
