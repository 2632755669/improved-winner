import { useState } from 'react';
import { Icon } from '@ss/mtd-react';
import classnames from 'classnames';
import { detailData } from '../../../../mockData';
import './index.less';

export const DetailContent = () => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <section id="detail-content" className="detail-content-container mt-14">
      <section
        className="detail-content-text text-white-84"
        id="anchor-containter"
      >
        {detailData.map((item) => {
          return (
            <>
              <div
                id={item.id}
                key={item.id}
                className="detail-content-title text-white-84 text-2xl my-4"
              >
                {item.title}
              </div>
              <div className="detail-content-desc text-white-60 text-base ">
                {item.desc}
              </div>
            </>
          );
        })}
      </section>
      <section className="detail-content-like w-full flex-col-center my-14">
        <div
          className={`text-white-42 flex-col-center text-sm ${classnames({
            'text-blue-300': isLike,
          })}`}
        >
          <span
            onClick={handleLike}
            className="text-center leading-10 border-solid-round cursor-pointer w-40px h-40px text-24"
          >
            <Icon type="fabulous" />
          </span>
          {isLike ? (
            <span className="my-2">24人赞赏</span>
          ) : (
            <>
              <span className="my-2">信息有用，点赞</span>
              <span>23人觉得很赞</span>
            </>
          )}
        </div>
      </section>
    </section>
  );
};
