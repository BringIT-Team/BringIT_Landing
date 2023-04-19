import { useState, forwardRef } from 'react';
import logo from '../../assets/logo.png';
import './index.css'

const Header = forwardRef(({ onNavClick }, ref) => {
  const [menuOpened, setMenuOpened] = useState(false);




  const onMenuClick = () => setMenuOpened(!menuOpened);

  const onLinkClick = topic => {
    onNavClick(topic);
    setMenuOpened(false);
  }

  return (
    <header ref={ref} className="px-5">
      <img className="logo" src={logo}/>
      <span onClick={onMenuClick} className="md:hidden icon">{menuOpened ? 'close' : 'menu'}</span>
      <nav className="desktop-nav hidden md:flex">
        <span onClick={() => onNavClick('header')}>Home</span>
        <span onClick={() => onNavClick('features')}>Features</span>
        <span onClick={() => onNavClick('pricing')}>Pricing</span>
        <span onClick={() => onNavClick('reviews')}>Reviews</span>
      </nav>
      <nav className="mobile-nav ease-in duration-300" style={{ width: menuOpened ? '100%' : '0px' }}>
        <span 
          className="text-3xl" 
          onClick={() => onLinkClick('header')}
          style={{ opacity: menuOpened ? '1' : '0' }}
        >
          Home
        </span>
        <span
          className="text-3xl"
          onClick={() => onLinkClick('features')}
          style={{ opacity: menuOpened ? '1' : '0' }}
        >
          Features
        </span>
        <span 
          className="text-3xl"
          onClick={() => onLinkClick('pricing')}
          style={{ opacity: menuOpened ? '1' : '0' }}
        >
          Pricing
        </span>
        <span 
          className="text-3xl"
          onClick={() => onLinkClick('reviews')}
          style={{ opacity: menuOpened ? '1' : '0' }}
        >
          Reviews
        </span>
      </nav>
    </header>
  );
});

export default Header;