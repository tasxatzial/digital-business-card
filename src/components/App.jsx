import React from 'react';
import Header from './Header.jsx';
import PersonalInfo from './PersonalInfo.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <>
      <article className="card">
        <Header />
        <PersonalInfo />
        <Footer />
      </article>
      <footer>
        <p className="github-info"><a href="https://github.com/tasxatzial/digital-business-card" className="github-link">See the project on GitHub</a></p>
      </footer>
    </>
  )
}
