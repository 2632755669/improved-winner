/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Affix } from 'xxxxx';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';
import { NavCard } from './NavCard';
import type { NavData } from './NavCard';
import { getMenusByModule, getMenuServiceList } from '../../../../apis/home';
import './index.less';

export const NavCardList = () => {
  const [tabData, setTabData] = useState<TabItem[]>([]);
  const [navCardList, setNavCardList] = useState<NavData[]>([]);
  const [moduleName, setModuleName] = useState('');
  const [loading, setLoading] = useState(false);

  const getTarget = () => {
    return (document.querySelector('#layout-content') ||
      document.body) as HTMLElement;
  };

  const fetchTabData = () => {
    setLoading(true);
    getMenusByModule()
      .then(setTabData)
      .finally(() => setLoading(false));
  };

  const fetchNavCardList = (id: string, title: string) => {
    getMenuServiceList(id).then(setNavCardList);
    setModuleName(title);
  };

  useEffect(() => {
    fetchTabData();
  }, []);

  if (loading) return null;

  return (
    <div className="mt-2">
      <Affix offsetTop={0} getTarget={getTarget}>
        <Tabs tabs={tabData} onChange={fetchNavCardList} />
      </Affix>
      <section className="w-full -ml-3 grid grid-cols-1 lg:grid-cols-2 desktop1440:grid-cols-3 gap-6">
        {navCardList.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/detail/${item.id}?moduleId=${item.moduleId}&moduleName=${moduleName}`}
            >
              <NavCard data={item} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
