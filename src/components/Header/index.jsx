import logo from '../../assets/logo.png';
import './index.css'

const Header = () => {
  return (
    <header className="px-5">
      <img className="logo" src={logo}/>
      <nav>
        <span>Home</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>Reviews</span>
      </nav>
    </header>
  );
};

export default Header;