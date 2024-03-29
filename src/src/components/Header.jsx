import React from 'react';
import facePhoto from '../assets/face.png';

export default function Header() {
  return (
    <header>
      <img src={facePhoto} alt="face photo of Laura Smith" />
      <h2>Laura Smith
        <span>Frontend Developer</span>
      </h2>
      <p>laurasmith.website</p>
      <div>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </header>
  )
}
