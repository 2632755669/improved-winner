import { LastOnlineList } from './components/LastOnlineList';
import { NavCardList } from './components/NavCardList';

export const Index = () => {
  return (
    <main className="pb-24">
      <LastOnlineList />
      <NavCardList />
    </main>
  );
};
