import { Link } from 'react-router-dom';
import { Tabs } from './Tabs';
import { NavCard } from './NavCard';
import './index.less';

export const NavCardList = () => {
  return (
    <div className="mt-12">
      <Tabs />
      <section className="w-full grid gap-4 grid-cols-3">
        <Link to="/detail/123">
          <NavCard />
        </Link>
        <Link to="/detail/123">
          <NavCard />
        </Link>
        <Link to="/detail/123">
          <NavCard />
        </Link>
        <Link to="/detail/123">
          <NavCard />
        </Link>
        <Link to="/detail/123">
          <NavCard />
        </Link>
        <Link to="/detail/123">
          <NavCard />
        </Link>
      </section>
    </div>
  );
};
