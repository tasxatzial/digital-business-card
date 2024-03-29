import React from 'react';
import facePhoto from '../assets/face.png';

export default function Header() {
  return (
    <header>
      <img src={facePhoto} alt="face photo of Laura Smith" />
      <h2 className="card-title">Laura Smith
        <span className="card-subtitle">Frontend Developer</span>
      </h2>
      <p>laurasmith.website</p>
      <div>
        <button className="card-btn card-email-btn">Email</button>
        <button className="card-btn card-linkedin-btn">LinkedIn</button>
      </div>
    </header>
  )
}
