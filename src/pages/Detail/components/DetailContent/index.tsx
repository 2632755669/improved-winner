/* eslint-disable react/no-danger */
import { useContext, Fragment } from 'react';
import classnames from 'classnames';
import { CaseList } from './CaseList';
import { LikeContext } from '../../context/LikeContext';
import { ContentDetailItem } from '../../hooks/useDetailData';
import like42Svg from '../../../../assets/icon/like42.svg';
import likeLightSvg from '../../../../assets/icon/like-light.svg';
import './index.less';

interface Props {
  data: ContentDetailItem[];
}

export const DetailContent = (props: Props) => {
  const { data } = props;
  const { isLike, likeAction, likeCount } = useContext(LikeContext);

  if (!data?.length) return null;

  return (
    <section id="detail-content" className="detail-content-container mt-14">
      <section
        className="detail-content-text text-white-84"
        id="anchor-containter"
      >
        {data.map((item) => {
          return (
            <Fragment key={item.id}>
              <div
                id={item.id}
                className="text-white-84 text-2xl font-bold mb-4 mt-9 detail-content-title"
              >
                {item.title}
              </div>
              {item?.cases?.length ? (
                <CaseList data={item.cases} />
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="detail-content-desc text-white-60 text-base "
                />
              )}
            </Fragment>
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
            onClick={likeAction}
            className={`text-center leading-10 border-solid-round cursor-pointer w-40px h-40px text-24 hover:bg-dark-300 ${classnames(
              {
                'bg-dark-300': isLike,
              },
            )}`}
          >
            <img
              className="w-24px h-24px"
              src={isLike ? likeLightSvg : like42Svg}
              alt=""
            />
          </span>
          {isLike ? (
            <span className="my-2">{likeCount}人觉得很赞</span>
          ) : (
            <>
              <span className="my-2">信息有用，点赞</span>
              <span>{likeCount}人觉得很赞</span>
            </>
          )}
        </div>
      </section>
    </section>
  );
};
