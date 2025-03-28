import React from 'react'
import './Card1.css'
import card1 from '../Elements/card1.png'
import card2 from '../Elements/card2.png'
import card3 from '../Elements/card3.png'

export default function Card() {
  return (
    <>
    {/* // <!-- -------------------- CARD ---------------------- --> */}

  <h1 style={{textAlign: 'center', backgroundColor: '#cac3c3'}}>NADRA Information Desk</h1>

  <div className="main-card">
    <div className="card">
        <img src={card1} alt="image"/>
        <h2>Identity Documents</h2>
        <p>To register for an identity document with NADRA , please read more about identity documents .</p>
        <a href="/">Read More<i className="fa-solid fa-arrow-right"></i></a>
    </div>
    <div className="card">
        <img src={card2} alt="image"/>
        <h2>Enterprise Solutions</h2>
        <p>NADRA has the expertise in developing enterprise grade solutions in the Identity Management industry with issuance of Secure Documents.</p>
        <a href="/">Read More<i className="fa-solid fa-arrow-right"></i></a>
    </div>
    <div className="card">
        <img src={card3} alt="image"/>
        <h2>International Presence</h2>
        <p>NADRA has been bookmarked as an expert enterprise solution provider, all around the world .</p>
        <a href="/">Read More<i className="fa-solid fa-arrow-right"></i></a>
    </div>
  </div>
  </>
  )
}
