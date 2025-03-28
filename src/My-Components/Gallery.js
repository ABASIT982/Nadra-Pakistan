import React from 'react'
import './Gallery.css'
import image1 from '../Elements/image1.jpg';
import image2 from '../Elements/image2.jpg';
import image3 from '../Elements/image3.jpg';
import image4 from '../Elements/image4.jpg';
import image5 from '../Elements/image5.jpg';


export default function Gallery() {
  return (
    // <!-- ------------------- GALLERY ----------------------------------- -->

    <div className="gallery-container">
      <div className="gallery">
        <img src={image1} alt="Image 1"/>
        <img src={image2} alt="Image 2"/>
        <img src={image3} alt="Image 3"/>
        <img src={image4} alt="Image 4"/>
        <img src={image5} alt="Image 5"/>
        <img src={image1} alt="Image 6"/>
        <img src={image2} alt="Image 7"/>
        <img src={image3} alt="Image 8"/>
        <img src={image4} alt="Image 9"/>
        <img src={image5} alt="Image 10"/>
      </div>
    </div>
  )
}
