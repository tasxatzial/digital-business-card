import SocialIcons from '/assets/social-icons.svg';
import PropTypes from 'prop-types';

export default function SocialLink(props) {
  return (
    <a href={`https://${props.name}.com`} className="card-social-link" aria-label={props.name}>
      <svg className="card-social-link-icon" width="25px" height="25px">
        <use href={`${SocialIcons}#${props.name}`}></use>
      </svg>
    </a>
  )
}

SocialLink.propTypes = {
  name: PropTypes.string.isRequired
}
