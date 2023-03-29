import './index.css';

const Home = () => {
  return (
    <section className="home flex flex-col">
      <div className="m-auto text-center max-w-3xl">
        <div className="titleBackground mx-10">
          <h1>Pour tes soirées, si tu sais quoi apporter just Bring IT !</h1>
        </div>
        <p className="text-md mt-10 mx-10 text-md">
          Avec bringIt, on évite le gaspillage et les dépenses inutiles grâce à une visualisation 
          simple des budgets. Grâce à son système de rappels, vous n'aurez plus 
          d'excuses pour rater l'anniversaire de votre belle-mère
        </p>
        <button className="mt-10 rounded bg-gray-700 text-white py-3 px-5 drop-shadow-md hover:bg-gray-900">
          Participer à la Beta
        </button>
      </div>
    </section>
  )
};

export default Home;