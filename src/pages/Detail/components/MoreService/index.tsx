import { useContext } from 'react';
import { Link } from 'react-router-dom';
import querystring from 'querystring';
import { QueryStringContext } from '../../context/QueryStringContext';
import { ServiceCard } from './ServiceCard';
import type { MoreServiceDataItem } from './ServiceCard';

interface Props {
  data: MoreServiceDataItem[];
}

export const MoreService = (props: Props) => {
  const { data } = props;
  const { moduleId, moduleName } = useContext(QueryStringContext);
  const query = querystring.stringify({
    moduleId,
    moduleName,
  });
  return (
    <section className="more-service-container mt-32">
      <h3 className="text-white-84 text-2xl mb-4 font-bold">更多服务</h3>
      <section className="more-service-cards -ml-3">
        {data?.map((item) => {
          return (
            <Link key={item.id} to={`/detail/${item.id}?${query}`}>
              <ServiceCard data={item} />
            </Link>
          );
        })}
      </section>
    </section>
  );
};
