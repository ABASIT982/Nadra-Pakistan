import React from 'react'
import despic from '../Elements/despic.png';
import './Des.css'

export default function Des() {
  return (
    // <!-- ---------------- DESCRIPTION -------------------------- -->

    <div className="des-container">
      <div className="des-pic">
          <img src={despic} alt="image" style={{height: '300px'}}/>
      </div>
      <div className="des-info">
          <h1>Nadra</h1>
          <p>NADRA has gained international recognition for its success in providing solutions for identification, e-governance and secure documents that deliver multiple goals of mitigating identity theft, safe-guarding the interests of our clients and facilitating the public. In-depth Research and Development efforts have enabled NADRA to become the trailblazer in the areas of Software Integration, Data Warehousing and Network Infrastructure.</p>
      </div>
    </div>
  )
}
