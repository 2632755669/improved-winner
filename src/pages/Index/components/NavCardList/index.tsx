/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Affix } from '@ss/mtd-react';
import { Tabs } from './Tabs';
import { NavCard } from './NavCard';
import { homeTabs, homeNavList } from '../../../../mockData';
import { getModule } from '../../../../apis/home';
import './index.less';

export const NavCardList = () => {
  const getTarget = () => {
    return (document.querySelector('#layout-content') ||
      document.body) as HTMLElement;
  };

  useEffect(() => {
    getModule();
  }, []);

  return (
    <div className="mt-2">
      <Affix offsetTop={-3} getTarget={getTarget}>
        <Tabs tabs={homeTabs} />
      </Affix>
      <section className="w-full flex flex-wrap">
        {homeNavList.map((item, index) => {
          return (
            <Link key={index} to="/detail/123">
              <NavCard data={item} className="mr-6 mb-6" />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
