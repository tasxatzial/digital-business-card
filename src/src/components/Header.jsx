import React from 'react';
import facePhoto from '../assets/face.png';

export default function Header() {
  return (
    <header>
      <img src={facePhoto} alt="face photo of Laura Smith" />
      <h2>Laura Smith</h2>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <button>Email</button>
      <button>LinkedIn</button>
    </header>
  )
}
