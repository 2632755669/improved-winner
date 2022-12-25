import { Link } from 'react-router-dom';
import { ServiceCard } from './ServiceCard';

export const MoreService = () => {
  return (
    <section className="more-service-container mt-9">
      <h3 className="text-white-84 text-2xl mb-4 font-bold">更多服务</h3>
      <section className="more-service-cards">
        <Link to="/detail/234">
          <ServiceCard />
        </Link>
        <Link to="/detail/234">
          <ServiceCard />
        </Link>
        <Link to="/detail/234">
          <ServiceCard />
        </Link>
      </section>
    </section>
  );
};
