import { useRef } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import './App.css'

function App() {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const headerRef = useRef(null);

  const onNavClick = p => {
    switch (p) {
      case 'features':
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'pricing':
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <div className="App">
      <div className="container mx-auto pb-40">
        <Header ref={headerRef} onNavClick={onNavClick} />
        <Home onNavClick={onNavClick}/>
        <Features ref={featuresRef} />
        <Pricing ref={pricingRef} />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
