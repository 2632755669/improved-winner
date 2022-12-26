import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OnlineCard } from './OnlineCard';
import type { OnlineCardItem } from './OnlineCard';
import { getLastServiceList } from '../../../../apis/home';

export const LastOnlineList = () => {
  const [lastServiceList, setLastServiceList] = useState<OnlineCardItem[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchLastServiceList = () => {
    setLoading(true);
    getLastServiceList()
      .then(setLastServiceList)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLastServiceList();
  }, []);

  if (loading) return null;

  return (
    <div className="mb-5">
      <h3 className="text-2xl text-white-84 font-bold mb-7">最新上线</h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 desktop1440:grid-cols-3 gap-6">
        {lastServiceList?.map((item) => {
          return (
            <Link key={item.index} to={`/detail/${item.id}`}>
              <OnlineCard data={item} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
