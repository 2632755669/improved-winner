import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './index.less';

export const Breadcrumb = () => {
  return (
    <div className="text-white-42 text-base">
      <Link to="/home">
        <span className="breadcrumb-item cursor-pointer">首页</span>
      </Link>
      <span className="breadcrumb-icon">/</span>
      <Link to="/home">
        <span className="breadcrumb-item cursor-pointer">热门服务</span>
      </Link>
      <span className="breadcrumb-icon">/</span>
      <span
        className={`${classnames({
          'text-white-84': true,
        })} breadcrumb-border cursor-pointer`}
      >
        介绍行业发展情况
      </span>
    </div>
  );
};
