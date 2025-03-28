import React from 'react'

export default function Marquee() {
    return (
      <marquee style={{backgroundColor: '#053617', fontSize: 'large', color: 'yellow', height: '30px'}}>
        WE ARE HIRING: For more information please 
        <a href="/" style={{textDecoration: 'none', color: '#2ECC71'}}>Click Here</a>
        | NADRA Tenders: For more information please
        <a href="/" style={{textDecoration: 'none', color: '#2ECC71'}}>Click Here</a>
      </marquee>
    );
  }
  
