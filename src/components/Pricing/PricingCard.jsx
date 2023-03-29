import './index.css';

const PricingCard = ({ plan }) => {
  return (
    <div className="col-span-11 xl:col-span-3 offers flex flex-col items-center border-gray-400 border-2 rounded-md p-4">
      <h3 className="mb-6 mt-6">{plan.name}</h3>
      <span className="text-4xl">{plan.price}€</span>
      <span className="mt-2 text-gray-400 text-sm">Par mois</span>
      <ul className="mt-14 mb-14">
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;