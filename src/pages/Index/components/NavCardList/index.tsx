import { Tabs } from './Tabs';
import { NavCard } from './NavCard';
import './index.less';

export const NavCardList = () => {
  return (
    <div className="mt-12">
      <Tabs />
      <section className="flex w-full justify-between flex-wrap">
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
      </section>
    </div>
  );
};
