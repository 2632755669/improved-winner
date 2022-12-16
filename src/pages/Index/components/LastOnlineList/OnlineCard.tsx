import { Icon } from '@ss/mtd-react';
import testUrl from '../../../../assets/icon/logo_img.jpg';

interface Props {
  className?: string;
}

export const OnlineCard = (props: Props) => {
  const { className } = props;
  return (
    <div
      className={`flex items-center text-white-42 transition-all duration-700 cursor-pointer px-6 py-3 rounded-xl bg-dark-200.0 hover:bg-dark-200.1 w-424px h-94px ${className}`}
    >
      <span className="text-xl ">1</span>
      <img
        src={testUrl}
        alt=""
        className="object-cover mr-3 ml-6 w-70px h-70px rounded-lg"
      />
      <div>
        <h3 className="text-white-72 text-lg mb-1">介绍公司基本情况</h3>
        <div className="flex text-xs mb-2">
          <span className="bg-dark-300 p-1 rounded-md mr-1">内容全面</span>
          <span className="bg-dark-300 p-1 rounded-md mr-1">随时报更新</span>
        </div>
        <div className="text-base">
          <Icon type="fabulous" />
          <span className="ml-1">23</span>
        </div>
      </div>
    </div>
  );
};
