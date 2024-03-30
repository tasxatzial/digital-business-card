import React from 'react';
import SocialIcons from '../assets/social-icons.svg';

export default function SocialLink(props) {
  return (
    <a href={`https://${props.name}.com`} aria-label={props.name}>
      <svg className="social-link-icon" width="25px" height="26px">
        <use href={`${SocialIcons}#${props.name}`}></use>
      </svg>
    </a>
  )
}
