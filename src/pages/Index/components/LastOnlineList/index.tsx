import { Link } from 'react-router-dom';
import { OnlineCard } from './OnlineCard';
import { homeLastOnlineList } from '../../../../mockData';

export const LastOnlineList = () => {
  return (
    <div>
      <h3 className="text-2xl text-white-84 font-bold mb-7">最新上线</h3>
      <section className="flex flex-wrap">
        {homeLastOnlineList?.map((item) => {
          return (
            <Link to="/detail/123">
              <OnlineCard data={item} className="mr-6 mb-6" />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
