import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Anchor } from './components/Anchor';
import { Breadcrumb } from './components/Breadcrumb';
import { Description } from './components/Description';
import { DetailContent } from './components/DetailContent';
import { MoreService } from './components/MoreService';
import { Comment } from './components/Comment';
import { LikeContext } from './context/LikeContext';
import { CommentContext } from './context/CommentContext';
import { useComment } from './hooks/useComment';
import { useDetailData } from './hooks/useDetailData';
import { likeApi, cancelLikeApi } from '../../apis/common';
import './index.less';

// 详情页
export const Detail = () => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { id } = useParams<{ id: string }>();
  const { comments, deleteComment, publishComment } = useComment(id);
  const {
    anchorData,
    descData,
    descSwiperData,
    detailContentData,
    moreServiceData,
    breadcrumbData,
    loading,
  } = useDetailData();
  // 点赞和取消点赞
  const likeAction = () => {
    if (!isLike) {
      likeApi(id).then(() => {
        setIsLike(true);
        setLikeCount((value) => value + 1);
      });
    } else {
      cancelLikeApi(id).then(() => {
        setIsLike(false);
        setLikeCount((value) => value - 1);
      });
    }
  };

  useEffect(() => {
    setLikeCount(descData?.likeCount || 0);
    setIsLike(descData?.isUseful || false);
  }, [descData]);

  if (loading) return null;

  return (
    <CommentContext.Provider
      value={{ comments, deleteComment, publishComment }}
    >
      <LikeContext.Provider value={{ isLike, likeAction, likeCount }}>
        <main>
          <section>
            <Breadcrumb data={breadcrumbData} />
          </section>
          <section className="flex flex-wrap w-full mt-6">
            <section id="detail-left" className="detail-left flex-1">
              <Description
                descData={descData}
                descSwiperData={descSwiperData}
              />
              <DetailContent data={detailContentData} />
              <Comment />
            </section>
            <section className="detail-right hidden xl:block w-320px ml-12">
              <Anchor data={anchorData} />
              <MoreService data={moreServiceData} />
            </section>
          </section>
        </main>
      </LikeContext.Provider>
    </CommentContext.Provider>
  );
};
