import Feature from './Feature';
import './index.css';
import party from '../../assets/party.svg';

const Features = () => {
  return (
    <section className="features text-center flex flex-col">
      <div className="m-auto">
        <h2 className="text-3xl">Features</h2>
        <div className="grid grid-cols-12 gap-10 mt-20">
          <Feature 
            icon="celebration"
            title="Créez vos soirées"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Feature
            icon="group_add"
            title="Invitez vos amis"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Feature
            icon="sports_bar"
            title="Choisissez quoi apporter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <img className="partyDraw mx-auto mt-28" src={party} />
    </section>
  );
};

export default Features;