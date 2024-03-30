import React from 'react';
import Header from './Header.jsx';
import PersonalInfo from './PersonalInfo.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <article className="card">
      <Header />
      <PersonalInfo />
      <Footer />
    </article>
  )
}
