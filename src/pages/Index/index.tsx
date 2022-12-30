import { useEffect } from 'react';
import { LastOnlineList } from './components/LastOnlineList';
import { NavCardList } from './components/NavCardList';
import { pageView } from '../../utils/lx';

export const Index = () => {
  useEffect(() => {
    pageView({ cid: 'c_donation_9jj8uhj3' });
  }, []);
  return (
    <main className="pb-24">
      <LastOnlineList />
      <NavCardList />
    </main>
  );
};
