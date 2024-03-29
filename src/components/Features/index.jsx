import { forwardRef } from 'react';
import Feature from './Feature';
import './index.css';
import party from '../../assets/party.svg';

const Features = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="features text-center flex flex-col">
      <div className="m-auto">
        <h2 className="text-3xl">Fonctionnalités</h2>
        <div className="md:grid grid-cols-12 gap-10 mt-16">
          <Feature 
            icon="celebration"
            title="Créez vos soirées"
            description="Créez vos évènements, qu'il s'agisse d'un anniversaire, d'un barbecue ou d'une soirée entre amis, vous avez une vision globale de votre événement."
          />
          <Feature
            icon="group_add"
            title="Invitez vos amis"
            description="Ajoutez des participants à votre événement, vous pouvez même leur envoyer un rappel et gérer vos groupes d'amis !"
          />
          <Feature
            icon="sports_bar"
            title="Choisissez quoi apporter"
            description="Avec la liste d'articles, vous voyez ce que les autres participants apportent. Fini le gaspillage et les mauvaises surprises."
          />
        </div>
      </div>
      <img className="partyDraw mx-auto mt-15 w-8/12 md:w-4/12" src={party} alt="des gens qui font la fête" />
    </section>
  );
});

export default Features;