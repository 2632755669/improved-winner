import { useState } from 'react';
import { Icon } from '@ss/mtd-react';
import classnames from 'classnames';
import { DescSwiper } from '../DescSwiper';
import { detailContent } from '../../../../mockData';
import './index.less';

export const Description = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };

  return (
    <section className="description-container flex w-full text-base">
      <div className="flex-1 mr-14">
        <h1 className="text-white-84 text-3xl">{detailContent.title}</h1>
        <p className="mt-1 text-white-60 leading-snug">
          {detailContent.bizIntroduction}
        </p>
        <div className="mt-3">
          {detailContent.label?.map((item) => {
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
            className={`bg-dark-300 px-4 py-1 text-white-60 rounded-md ml-4 ${classnames(
              { 'text-blue-300': isSubscribe },
            )}`}
          >
            <Icon type="fabulous" />
            <span className="ml-1">23</span>
          </span>
          <span className="description-line" />
          <span
            className={`text-white-60 ml-6 ${classnames({
              'text-blue-300': isSubscribe,
            })}`}
          >
            <Icon type="comment" />
            <span className="ml-1">3</span>
          </span>
        </div>
      </div>
      <div className="description-swiper w-432px h-243px rounded-xl overflow-hidden bg-white-84">
        <DescSwiper />
      </div>
    </section>
  );
};
