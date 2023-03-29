import Header from './components/Header';
import Home from './components/Home';

import './App.css'
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <div className="container mx-auto">
        <Header />
        <Home />
        <Features />
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default App
