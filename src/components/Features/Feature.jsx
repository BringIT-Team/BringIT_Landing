import './index.css';

export default ({ icon, title, description }) => {
  return (
    <div className="featureCard col-span-4 px-10">
      <span className="material-icons-outlined text-6xl">{icon}</span>
      <h2 className="mt-5 font-semibold">{title}</h2>
      <p className="text-gray-500 text-md mt-4">{description}</p>
    </div>
  );
};