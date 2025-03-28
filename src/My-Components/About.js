import React from 'react'
import './About.css'
import image2 from '../Elements/image2.jpg'

export default function About() {
  return (
    <><br />
    <header className="about-header">
        <h1>About NADRA</h1>
        <p>National Database & Registration Authority</p>
    </header>
    <section className="about-content">
        <div className="about-text">
            <h2>Who We Are</h2>
            <p>
                The National Database and Registration Authority (NADRA) of Pakistan is a government organization responsible for 
                maintaining a secure and centralized database of all citizens. NADRA plays a pivotal role in issuing identification 
                documents, managing biometric records, and ensuring the integrity of the national database.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to provide efficient, secure, and innovative solutions to facilitate public services while safeguarding 
                citizens' data privacy. NADRA is committed to fostering trust and transparency by leveraging advanced technologies.
            </p>
        </div>
        <div className="about-image">
            <img src={image2} alt="NADRA Office"/>
        </div>
    </section>
    <section className="about-stats">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
            <div className="stat-item">
                <h3>200M+</h3>
                <p>Citizens Registered</p>
                <i class="fa-solid fa-person"></i>
                </div>
            <div className="stat-item">
                <h3>100+</h3>
                <p>Service Centers Nationwide</p>
                <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="stat-item">
                <h3>20+</h3>
                <p>Years of Excellence</p>
                <i className="fa-solid fa-stopwatch-20"></i>
            </div>
        </div>
    </section>
    <br/>
    <section className="about-services">
        <h2>Our Services</h2>
        <div className="our-services">
            <div className="service">
                <i className="fa-solid fa-user-lock"></i>
                <h4>Intergreted Management Security System</h4>
            </div>
            <div className="service">
                 <i class="fa-solid fa-lock"></i>
                <h4>Secure Document solutions</h4>
            </div>
            <div className="service">
                <i className="fa-solid fa-clipboard-list"></i>
                <h4>e-Governence Solution</h4>
            </div>
            <div className="service">
            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                <h4>Financial Services Solution</h4>
            </div>
            <div className="service">
                <i className="fa-solid fa-passport"></i>
                <h4>Consultency & Advisory Service</h4>
            </div>
            <div className="service">
                <i className="fa-solid fa-database"></i>
                <h4>Data Warehousing</h4>
            </div>
        </div>
    </section><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}
