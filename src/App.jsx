import Header from './components/Header.jsx';
import PersonalInfo from './components/PersonalInfo.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <article className="card">
        <Header />
        <PersonalInfo />
        <Footer />
      </article>
    </>
  )
}
