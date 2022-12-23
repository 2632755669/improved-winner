import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OnlineCard } from './OnlineCard';
import type { OnlineCardItem } from './OnlineCard';
import { getLastServiceList } from '../../../../apis/home';

export const LastOnlineList = () => {
  const [lastServiceList, setLastServiceList] = useState<OnlineCardItem[]>([]);

  const fetchLastServiceList = () => {
    getLastServiceList().then(setLastServiceList);
  };

  useEffect(() => {
    fetchLastServiceList();
  }, []);

  return (
    <div>
      <h3 className="text-2xl text-white-84 font-bold mb-7">最新上线</h3>
      <section className="flex flex-wrap">
        {lastServiceList?.map((item) => {
          return (
            <Link key={item.index} to="/detail/123">
              <OnlineCard data={item} className="mr-6 mb-6" />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
