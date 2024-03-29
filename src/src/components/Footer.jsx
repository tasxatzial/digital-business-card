import React from 'react';
import SocialLink from './SocialLink.jsx';

export default function Footer() {
  return (
    <footer>
      <ul aria-label="social links">
        <li><SocialLink name="twitter" /></li>
        <li><SocialLink name="facebook" /></li>
        <li><SocialLink name="instagram" /></li>
        <li><SocialLink name="github" /></li>
      </ul>
    </footer>
  )
}