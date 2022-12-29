import { useEffect, useState } from 'react';
import { useSearchParam } from 'react-use';
import { useParams } from 'react-router-dom';
import { message } from '@ss/mtd-react';
import { Anchor } from './components/Anchor';
import { Breadcrumb } from './components/Breadcrumb';
import { Description } from './components/Description';
import { DetailContent } from './components/DetailContent';
import { MoreService } from './components/MoreService';
import { Comment } from './components/Comment';
import { LikeContext } from './context/LikeContext';
import { CommentContext } from './context/CommentContext';
import { QueryStringContext } from './context/QueryStringContext';
import { useComment } from './hooks/useComment';
import { useDetailData } from './hooks/useDetailData';
import { likeApi, cancelLikeApi } from '../../apis/common';
import './index.less';

// 详情页
export const Detail = () => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeLoading, setLikeLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const moduleName = useSearchParam('moduleName') || '';
  const moduleId = useSearchParam('moduleId') || '';
  const { comments, deleteComment, publishComment } = useComment(id);
  const {
    anchorData,
    descData,
    descSwiperData,
    detailContentData,
    moreServiceData,
    breadcrumbData,
    loading,
  } = useDetailData(id, moduleName, moduleId);
  // 点赞和取消点赞
  const likeAction = () => {
    if (likeLoading) return;
    setLikeLoading(true);
    if (!isLike) {
      likeApi(id)
        .then(() => {
          message.success({ message: '点赞成功' });
          setIsLike(true);
          setLikeCount((value) => value + 1);
        })
        .finally(() => setLikeLoading(false));
    } else {
      cancelLikeApi(id)
        .then(() => {
          message.success({ message: '取消点赞成功' });
          setIsLike(false);
          setLikeCount((value) => value - 1);
        })
        .finally(() => setLikeLoading(false));
    }
  };

  useEffect(() => {
    setLikeCount(descData?.likeCount || 0);
    setIsLike(descData?.isUseful || false);
  }, [descData]);

  if (loading) return null;

  return (
    <QueryStringContext.Provider value={{ moduleId, moduleName }}>
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
              <section className="detail-right hidden xl:block w-368px pl-12">
                <Anchor data={anchorData} />
                <MoreService data={moreServiceData} />
              </section>
            </section>
          </main>
        </LikeContext.Provider>
      </CommentContext.Provider>
    </QueryStringContext.Provider>
  );
};
