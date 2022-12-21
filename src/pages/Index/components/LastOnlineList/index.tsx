import { Link } from 'react-router-dom';
import { OnlineCard } from './OnlineCard';
import { homeLastOnlineList } from '../../../../mockData';

export const LastOnlineList = () => {
  return (
    <div>
      <h3 className="text-2xl text-white-84 mb-7">最新上线</h3>
      <section className="flex justify-between flex-wrap">
        {homeLastOnlineList?.map((item) => {
          return (
            <Link to="/detail/123">
              <OnlineCard data={item} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
