import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './My-Components/Navbar';
import Navbar1 from './My-Components/Navbar1';
import Gallery from './My-Components/Gallery';
import Marquee from './My-Components/Marquee';
import Des from './My-Components/Des';
import Card1 from './My-Components/Card1';
import FAQ from './My-Components/FAQ';
import Footer from './My-Components/Footer';
import About from './My-Components/About';
import Contact from './My-Components/Contact';
import Complain from './My-Components/Complain';
import Login from './My-Components/Login';
import Signup from './My-Components/Signup';
import ApplyCNIC from './My-Components/ApplyCNIC';
import ApplyFRC from './My-Components/ApplyFRC';
import ReNewID from './My-Components/ReNewID';
import NICOP from './My-Components/NICOP';
import TrackDocument from './My-Components/TrackDocument';
import ReportLostID from './My-Components/ReportLostID';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Navbar1 />

      <Routes>
        {/* default */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <>
              <Gallery />
              <Marquee />
              <Des />
              <Card1 />
              <FAQ />
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apply-cnic" element={<ApplyCNIC />} />
        <Route path="/frc" element={<ApplyFRC />} />
        <Route path="/re-new-id" element={<ReNewID />} />
        <Route path="/nicop" element={<NICOP />} />
        <Route path="/track-document" element={<TrackDocument />} />
        <Route path="/report-lost-cnic" element={<ReportLostID />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
