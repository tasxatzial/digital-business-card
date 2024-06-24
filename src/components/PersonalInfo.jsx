export default function PersonalInfo() {
  return (
    <div>
      <section className="card-section" aria-labelledby="about">
        <div className="primary-container">
          <h3 id="about" className="card-section-title">About</h3>
          <p className="card-section-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
      </section>
      <section className="card-section" aria-labelledby="interests">
        <div className="primary-container">
          <h3 id="interests" className="card-section-title">Interests</h3>
          <p className="card-section-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </section>
    </div>
  )
}