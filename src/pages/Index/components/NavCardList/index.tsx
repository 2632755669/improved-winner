import { Link } from 'react-router-dom';
import { Tabs } from './Tabs';
import { NavCard } from './NavCard';
import { homeTabs, homeNavList } from '../../../../mockData';
import './index.less';

export const NavCardList = () => {
  return (
    <div className="mt-12">
      <Tabs tabs={homeTabs} />
      <section className="w-full flex flex-wrap">
        {homeNavList.map((item) => {
          return (
            <Link to="/detail/123">
              <NavCard data={item} className="mr-6 mb-6" />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
