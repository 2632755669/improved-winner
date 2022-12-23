/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Affix } from '@ss/mtd-react';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';
import { NavCard } from './NavCard';
import type { NavData } from './NavCard';
import { getModuleMenus, getMenuServiceList } from '../../../../apis/home';
import './index.less';

export const NavCardList = () => {
  const [tabData, setTabData] = useState<TabItem[]>([]);
  const [navCardList, setNavCardList] = useState<NavData[]>([]);

  const getTarget = () => {
    return (document.querySelector('#layout-content') ||
      document.body) as HTMLElement;
  };

  const fetchTabData = () => {
    getModuleMenus().then(setTabData);
  };

  const fetchNavCardList = (id: string) => {
    getMenuServiceList(id).then(setNavCardList);
  };

  useEffect(() => {
    fetchTabData();
  }, []);

  return (
    <div className="mt-2">
      <Affix offsetTop={-3} getTarget={getTarget}>
        <Tabs tabs={tabData} onChange={fetchNavCardList} />
      </Affix>
      <section className="w-full flex flex-wrap">
        {navCardList.map((item, index) => {
          return (
            <Link key={index} to={`/detail/${item.id}`}>
              <NavCard data={item} className="mr-6 mb-6" />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
