import PricingCard from './PricingCard';

import './index.css';

const Pricing = () => {

  const plans = [
    {
      name: 'Visitor',
      price: 0,
      features: [
        '3 évènement par mois',
        '15 personnes par évènement',
      ],
    },
    {
      name: 'Premium',
      price: 2,
      features: [
        'Nombre illimité d\'évènement',
        'Nombre illimité de personnes',
        'Groupes d\'amis',
        'Duplication d\'évènement',
      ],
    },
    {
      name: 'Account',
      price: 0,
      features: [
        '6 évènement par mois',
        '15 personnes par évènement',
        'Sondages',
        'Badges personnalisés',
      ],
    },
  ];
  return (
    <div className="mt-10 mb-10 flex flex-col items-center">
      <h2 className="text-3xl">Offres</h2>
      <div className="mt-10 grid grid-cols-11 gap-8">
        { plans.map((p, i) => (
          <PricingCard key={i} plan={p} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;