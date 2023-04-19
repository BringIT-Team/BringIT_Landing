import home from '../../assets/home.svg';
import './index.css';

const Home = ({ onNavClick }) => {
  return (
    <section className="home flex flex-col justify-center">
      <div className="flex">
        <div className="m-auto lg:mr-16 text-center lg:text-left px-10 lg:px-0">
          <div className="titleBackground">
            <h1 className="text-3xl md:text-5xl">Pour tes soirées, si tu ne sais pas quoi apporter just Bring IT !</h1>
          </div>
          <p className="text-md mt-10 mb-20 lg:mr-24 text-md">
            Avec bringIt, on évite le gaspillage et les dépenses inutiles grâce à une visualisation 
            simple des budgets. Grâce à son système de rappels, vous n'aurez plus 
            d'excuses pour rater l'anniversaire de votre belle-mère.
          </p>
          <a 
            className="rounded bg-gray-700 text-white py-3 px-5 drop-shadow-md hover:bg-gray-900" 
            target="_blank" 
            href="https://discord.gg/d3BGYVA5ey"
          >
            Participer à la Beta
          </a>
        </div>
        <img className="hidden lg:block w-5/12 -mt-10" src={home} />
      </div>
      <span onClick={() => onNavClick('features')}className="scrollIcon">expand_more</span>
    </section>
  )
};

export default Home;