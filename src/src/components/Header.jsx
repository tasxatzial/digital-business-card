import React from 'react';
import facePhoto from '../assets/face.png';
import btnIcons from '../assets/btn-icons.svg';

export default function Header() {
  return (
    <header>
      <img src={facePhoto} width="317px" height="317px" className="card-face" alt="face photo of Laura Smith" />
      <h2 className="card-title">Laura Smith
        <span className="card-subtitle">Frontend Developer</span>
      </h2>
      <p>laurasmith.website</p>
      <div className="card-btns-container">
        <button className="card-btn card-email-btn" aria-label="Email">
          <svg width="16px" height="16px">
            <use href={`${btnIcons}#mail`}></use>
          </svg>
          <span>Email</span>
        </button>
        <a href="https://linkedin.com" className="card-btn card-linkedin-btn" aria-label="LinkedIn">
          <svg width="16px" height="16px">
            <use href={`${btnIcons}#linkedin`}></use>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  )
}
