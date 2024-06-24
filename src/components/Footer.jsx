import SocialLink from './SocialLink.jsx';

export default function Footer() {
  return (
    <footer className="card-footer">
      <ul className="card-social-links" aria-label="social links">
        <li><SocialLink name="twitter" /></li>
        <li><SocialLink name="facebook" /></li>
        <li><SocialLink name="instagram" /></li>
        <li><SocialLink name="github" /></li>
      </ul>
    </footer>
  )
}
