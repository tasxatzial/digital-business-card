import React from 'react';
import SocialIcons from '../assets/social-icons.svg';

export default function SocialLink(props) {
  return (
    <a href={`https://${props.name}.com`} aria-label={props.name}>
      <svg className="card-social-link-icon" width="25px" height="25px">
        <use href={`${SocialIcons}#${props.name}`}></use>
      </svg>
    </a>
  )
}
