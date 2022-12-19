import { Link } from 'react-router-dom';
import { Tabs } from './Tabs';
import { NavCard } from './NavCard';
import { homeTabs, homeNavList } from '../../../../mockData';
import './index.less';

export const NavCardList = () => {
  return (
    <div className="mt-12">
      <Tabs tabs={homeTabs} />
      <section className="w-full grid gap-4 grid-cols-3">
        {homeNavList.map((item) => {
          return (
            <Link to="/detail/123">
              <NavCard data={item} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
