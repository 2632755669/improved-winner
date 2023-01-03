/* eslint-disable react/no-array-index-key */
import like42Svg from '../../../../assets/icon/like42.svg';

export interface OnlineCardItem {
  id: string;
  index: number;
  title: string;
  titleImg: string;
  tags: string[];
  likeCount: string;
}

interface Props {
  className?: string;
  data: OnlineCardItem;
}

export const OnlineCard = (props: Props) => {
  const { className, data } = props;
  return (
    <div
      className={`flex text-white-42 transition-all duration-700 cursor-pointer p-3 rounded-xl bg-dark-200.0 hover:bg-dark-200.1 w-424px h-96px ${className}`}
    >
      <span className="text-xl font-bold flex items-center">{data.index}</span>
      <img
        src={data.titleImg}
        alt=""
        className="object-cover mr-3 ml-6 w-72px h-72px rounded-lg img-border"
      />
      <div>
        <h3 className="text-white-72 text-lg font-bold mb-1">{data.title}</h3>
        <div className="Online-card-tag flex  mb-2">
          {data.tags?.map((item, index) => {
            return (
              <span
                key={index}
                className="bg-dark-300 hidden md:block first:block text-white-72 text-sm leading-5 px-1 rounded mr-1"
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex items-center">
          <img className="w-14px h-14px" src={like42Svg} alt="" />
          <span className="ml-1 text-base leading-4">{data.likeCount}</span>
        </div>
      </div>
    </div>
  );
};
