import { forwardRef } from 'react';

import PricingCard from './PricingCard';

import './index.css';

const Pricing = forwardRef(({}, ref) => {

  const plans = [
    {
      name: 'Visiteur',
      price: 'Gratuit',
      features: [
        '3 évènement par mois',
        '15 personnes par évènements',
      ],
      monthly: false,
    },
    {
      name: 'Premium',
      price: '2€',
      features: [
        'Nombre illimité d\'évènements',
        'Nombre illimité de personnes',
        'Groupes d\'amis',
        'Duplication d\'évènements',
      ],
      monthly: true,
    },
    {
      name: 'Compte',
      price: 'Inscription',
      features: [
        '6 évènements par mois',
        '15 personnes par évènements',
        'Sondages',
        'Badges personnalisés',
      ],
      monthly: false,
    },
  ];
  return (
    <section ref={ref} className="mt-20 mb-10 flex flex-col items-center content-center">
      <h2 className="text-3xl">Offres</h2>
      <div className="mt-20 grid grid-cols-11 gap-8 items-center">
        { plans.map((p, i) => (
          <PricingCard key={i} plan={p}/>
        ))}
      </div>
    </section>
  );
});

export default Pricing;