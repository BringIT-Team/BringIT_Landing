import { forwardRef } from 'react';
import logo from '../../assets/logo.png';
import './index.css'

const Header = forwardRef(({ onNavClick }, ref) => {
  return (
    <header ref={ref} className="px-5">
      <img className="logo" src={logo}/>
      <nav>
        <span onClick={() => onNavClick('header')}>Home</span>
        <span onClick={() => onNavClick('features')}>Features</span>
        <span onClick={() => onNavClick('pricing')}>Pricing</span>
        <span onClick={() => onNavClick('reviews')}>Reviews</span>
      </nav>
    </header>
  );
});

export default Header;