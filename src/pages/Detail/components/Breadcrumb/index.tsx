import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './index.less';

export interface BreadcrumbDataItem {
  title: string;
  path: string;
}

interface Props {
  data: BreadcrumbDataItem[];
}

export const Breadcrumb = (props: Props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="breadcrumb-container">
      {data?.map((item, index) => {
        if (index + 1 === data?.length) {
          return (
            <span
              className={`${classnames({
                'text-white-84': true,
              })} breadcrumb-border cursor-pointer`}
            >
              {item.title}
            </span>
          );
        }
        return (
          <>
            <Link to={item.path} key={item.path}>
              <span className="breadcrumb-item cursor-pointer">
                {item.title}
              </span>
            </Link>
            <span className="breadcrumb-icon">/</span>
          </>
        );
      })}
    </div>
  );
};
