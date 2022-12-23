import { useState, useContext } from 'react';
import { Icon } from '@ss/mtd-react';
import classnames from 'classnames';
import { DescSwiper } from '../DescSwiper';
import { LikeContext } from '../../context/LikeContext';
import { DescData, DescSwiperDataItem } from '../../hooks/useDetailData';
import './index.less';

interface Props {
  descData: Partial<DescData>;
  descSwiperData: DescSwiperDataItem[];
}

export const Description = (props: Props) => {
  const { descData, descSwiperData } = props;

  // 订阅
  const [isSubscribe, setIsSubscribe] = useState(false);
  // 点赞
  const { isLike, likeAction } = useContext(LikeContext);

  // 订阅
  const handleSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };

  // 跳到评论区
  const handleScrollComment = () => {
    document
      .querySelector('#detail-comment')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="description-container flex w-full text-base">
      <div className="flex-1 mr-14">
        <h1 className="text-white-84 text-3xl">{descData.title}</h1>
        <p className="mt-1 text-white-60 leading-snug">{descData.intro}</p>
        <div className="mt-3">
          {descData.tags?.map((item) => {
            return (
              <span className="bg-dark-300 p-1 rounded-md mr-2 mb-2 text-white-60">
                {item}
              </span>
            );
          })}
        </div>
        <div className="description-action flex items-center mt-4">
          {isSubscribe ? (
            <span
              onClick={handleSubscribe}
              className="text-white-100 px-4 py-1 bg-white-30 rounded-md cursor-pointer"
            >
              已订阅
            </span>
          ) : (
            <span
              onClick={handleSubscribe}
              className="text-white-100 px-4 py-1 bg-blue-300 rounded-md cursor-pointer"
            >
              <Icon type="add" />
              <span className="ml-1">订阅</span>
            </span>
          )}
          <span
            className={`bg-dark-300 px-4 py-1 cursor-pointer text-white-60 hover:text-blue-300 rounded-md ml-4 ${classnames(
              {
                'text-blue-300': isLike,
              },
            )}`}
            onClick={likeAction}
          >
            <Icon type="fabulous" />
            <span className="ml-1">{descData.likeCount}</span>
          </span>
          <span className="description-line" />
          <span
            className="text-white-60 ml-6 cursor-pointer hover:text-blue-300"
            onClick={handleScrollComment}
          >
            <Icon type="comment" />
            <span className="ml-1">3</span>
          </span>
        </div>
      </div>
      <div className="description-swiper w-432px h-243px rounded-xl overflow-hidden bg-white-84">
        <DescSwiper descSwiperData={descSwiperData} />
      </div>
    </section>
  );
};
