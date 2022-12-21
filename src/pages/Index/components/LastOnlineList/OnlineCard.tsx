/* eslint-disable react/no-array-index-key */
import { Icon } from '@ss/mtd-react';

interface Props {
  className?: string;
  data: {
    index: number;
    title: string;
    titleImg: string;
    tags: string[];
    likeCount: number;
  };
}

export const OnlineCard = (props: Props) => {
  const { className, data } = props;
  return (
    <div
      className={`flex items-center text-white-42 transition-all duration-700 cursor-pointer px-6 py-3 rounded-xl bg-dark-200.0 hover:bg-dark-200.1 w-424px h-94px ${className}`}
    >
      <span className="text-xl font-bold">{data.index}</span>
      <img
        src={data.titleImg}
        alt=""
        className="object-cover mr-3 ml-6 w-70px h-70px rounded-lg img-border"
      />
      <div>
        <h3 className="text-white-72 text-lg font-bold mb-1">{data.title}</h3>
        <div className="flex text-xs text-white-72 leading-4.5 mb-2">
          {data.tags?.map((item, index) => {
            return (
              <span key={index} className="bg-dark-300 px-1 rounded-md mr-1">
                {item}
              </span>
            );
          })}
        </div>
        <div className="text-base">
          <Icon type="fabulous" />
          <span className="ml-1">{data.likeCount}</span>
        </div>
      </div>
    </div>
  );
};
