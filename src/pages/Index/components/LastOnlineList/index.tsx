import { Link } from 'react-router-dom';
import { OnlineCard } from './OnlineCard';

export const LastOnlineList = () => {
  return (
    <div>
      <h3 className="text-2xl text-white-84 mb-7">最新上线</h3>
      <section className="flex justify-between flex-wrap">
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
        <Link to="/detail/123">
          <OnlineCard />
        </Link>
      </section>
    </div>
  );
};
