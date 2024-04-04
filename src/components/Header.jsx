import React from 'react';
import facePhoto from '../assets/face.png';
import btnIcons from '../assets/btn-icons.svg';

export default function Header() {
  return (
    <header className="card-header">
      <img src={facePhoto} width="317px" height="317px" className="card-face" alt="face photo of Laura Smith" />
      <div className="primary-container">
        <h2 className="card-title">Laura Smith
          <span className="card-subtitle">Frontend Developer</span>
        </h2>
        <p className="card-website">laurasmith.website</p>
        <div className="card-btns-container">
          <button className="card-btn card-email-btn" aria-label="Email">
            <svg className="card-btn-icon" width="16px" height="16px">
              <use href={`${btnIcons}#mail`}></use>
            </svg>
            <span>Email</span>
          </button>
          <a href="https://linkedin.com" className="card-btn card-linkedin-btn" aria-label="LinkedIn">
            <svg className="card-btn-icon" width="16px" height="16px">
              <use href={`${btnIcons}#linkedin`}></use>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  )
}
