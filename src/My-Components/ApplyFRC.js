import React, { useState } from 'react';
import axios from 'axios';
import './ApplyFRC.css';

export default function ApplyFRC() {
  const [formData, setFormData] = useState({
    fullName: '',      
    cnic: '',
    guardianName: '',   
    guardianCnic: '',
    totalMembers: '',
    email: ''
  });

  const [message, setMessage] = useState('');
  const [searchCnic, setSearchCnic] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  //-------------------- Handle form data change --------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  //------------------------ Handle form submission ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/frc', formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting FRC application:", error);
      alert("There was an error submitting your application.");
    }
  };

  //--------------------- Handle FRC search by CNIC ---------------------------
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/frc/${searchCnic}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error("Error fetching FRC data:", error);
      setSearchResult(null); //-------------- Clear previous search result ---------------------
      alert("No FRC data found for this CNIC.");
    }
  };

  return (
    <>
      {/*----------------- Header -----------------------*/}
      <br />
      <header className="frc-header">
        <h1>Family Registration Certificate (FRC)</h1>
        <p>- - - Your Family Identity Secured - - -</p>
        <div className="search3">
            <input
              type="text"
              placeholder="Enter CNIC to search"
              value={searchCnic}
              onChange={(e) => setSearchCnic(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      {/*--------- Main Section ----------------*/}
      <main className="frc-container">
        {/*------------------- Left Section --------------------*/}
        <section className="frc-info">
          <h2>What is FRC?</h2>
          <p>The Family Registration Certificate (FRC) is an official document issued by NADRA that contains the details of your family members. It is essential for various legal and official purposes.</p>
          <br />
          <h3>Requirements:</h3>
          <ul>
            <li><i className="fa-solid fa-id-card"></i> Valid CNIC of head of family</li>
            <li><i className="fa-solid fa-user-group"></i> Details of all family members</li>
            <li><i className="fa-solid fa-calendar-days"></i> Application fee receipt</li>
          </ul>
          <br />
          <h3>Instructions:</h3>
          <ul>
            <li>Ensure all details are accurate before submission.</li>
            <li>Attach a recent family photo if required.</li>
            <li>Keep your CNIC handy for verification.</li>
          </ul>
        </section>

        {/*------------------ Right Section -----------------*/}
        <section className="frc-form">
          <h2>Apply for FRC</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"        // Ensure this field name matches the backend
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="cnic">CNIC Number:</label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              placeholder="Enter your CNIC number"
              value={formData.cnic}
              onChange={handleChange}
              required
            />

            <label htmlFor="guardian-name">Guardian Name:</label>
            <input
              type="text"
              id="guardian-name"
              name="guardianName"    // Ensure this field name matches the backend
              placeholder="Enter your Guardian name"
              value={formData.guardianName}
              onChange={handleChange}
              required
            />

            <label htmlFor="guardian-cnic">Guardian CNIC:</label>
            <input
              type="text"
              id="guardian-cnic"
              name="guardianCnic"
              placeholder="Enter Guardian CNIC number"
              value={formData.guardianCnic}
              onChange={handleChange}
              required
            />

            <label htmlFor="members">Total Members</label>
            <input
              type="number"
              min="0"
              id="members"
              name="totalMembers"
              placeholder="Enter total members"
              value={formData.totalMembers}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <button type="submit" className="apply-btn">Submit Application</button>
          </form>

        </section>
        {/*------------------------ Search Section ---------------------*/}
        <div className="user-output">
            {searchResult && (
              <div className="result">
                <h4>FRC Data</h4>
                <p><strong>Name:</strong> {searchResult.fullName}</p>
                <p><strong>CNIC:</strong> {searchResult.cnic}</p>
                <p><strong>Guardian Name:</strong> {searchResult.guardianName}</p>
                <p><strong>Guardian CNIC:</strong> {searchResult.guardianCnic}</p>
                <p><strong>Total Members:</strong> {searchResult.totalMembers}</p>
                <p><strong>Email:</strong> {searchResult.email}</p>
              </div>
            )}
        </div>
      </main>
      <br /><br /><br /><br />      <br /><br /><br /><br />

    </>
  );
}
