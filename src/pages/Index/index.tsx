import { useEffect, useContext } from 'react';
import { LastOnlineList } from './components/LastOnlineList';
import { NavCardList } from './components/NavCardList';
import { UserInfoContext } from '../../context/UserInfoContext';
import { pageView } from '../../utils/lx';
import { getAccessEnv } from '../../utils/getAccessEnv';

const accessEnv = getAccessEnv();

export const Index = () => {
  const { username, mis } = useContext(UserInfoContext);
  useEffect(() => {
    if (username && mis) {
      pageView({
        cid: 'c_donation_9jj8uhj3',
        custom: {
          username,
          mis,
          accessEnv,
        },
      });
    }
  }, [username, mis]);
  return (
    <main className="pb-24">
      <LastOnlineList />
      <NavCardList />
    </main>
  );
};
