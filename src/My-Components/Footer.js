import React from 'react'
import './Footer.css'
import nadraLogo from '../Elements/nadraLogo.png'

export default function Footer() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
  return (
    // <!-- --------------- FOOTER ----------------------------------  -->

<footer>
<div className="top">
          <button style={{marginLeft:'600px', }}onClick={scrollToTop} >
            Back to Top
          </button>
        </div>
    <div className="description">
        <ul> Get to Know Us
            <li>Careers</li>
            <li>Blog</li>
            <li>About </li>
            <li>Relation</li>
            <li>Nadra</li>
            <li>Relation</li>
        </ul>
        <ul> Get to Know Us
            <li>Careers</li>
            <li>Blog</li>
            <li>About </li>
            <li>Relation</li>
            <li>Nadra</li>
            <li>Relation</li>
        </ul>
        <ul> Get to Know Us
            <li>Careers</li>
            <li>Blog</li>
            <li>About </li>
            <li>Relation</li>
            <li>Nadra Invester</li>
            <li>Relation</li>
        </ul>
        <ul> Get to Know Us
            <li>Careers</li>
            <li>Blog</li>
            <li>About </li>
            <li>Relation</li>
            <li>Nadra</li>
            <li>Relation</li>
        </ul>
        <ul> Get to Know Us
            <li>Careers</li>
            <li>Blog</li>
            <li>About Nadra</li>
            <li>Relation</li>
            <li>Nadra</li>
            <li>Relation</li>
        </ul>
    </div>
    <div className="footer-logo">
        <div className="footer-iamge">
            <img src={nadraLogo} alt="logo" />
        </div>
        <div className="contact">
            <i className="fa-solid fa-phone" style={{color: 'burlywood'}}></i>
            <i className="fa-solid fa-envelope" style={{color: 'darkred'}}></i>
            <i className="fa-brands fa-whatsapp" style={{color: 'green'}}></i>
            <i className="fa-brands fa-facebook" style={{color: 'blue'}}></i>
            <i className="fa-brands fa-instagram" style={{color: 'purple'}}></i>
        </div>
        <div className="copy-right">
            <p>All Rights Reserved with Nadra.com|#acsac@0938388</p>
            <p>www.Nadra.com||Privacy Policy</p>
        </div>
    </div>
</footer>
  )
}
