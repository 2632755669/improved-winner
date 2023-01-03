import { useEffect, useContext } from 'react';
import { useSearchParam } from 'react-use';
import { useParams } from 'react-router-dom';
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
import { UserInfoContext } from '../../context/UserInfoContext';
import { useDetailData } from './hooks/useDetailData';
import { useLike } from './hooks/useLike';
import { pageView } from '../../utils/lx';
import { getAccessEnv } from '../../utils/getAccessEnv';
import './index.less';

const accessEnv = getAccessEnv();

// 详情页
export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const moduleName = useSearchParam('moduleName') || '';
  const moduleId = useSearchParam('moduleId') || '';
  const { likeCount, isLike, likeAction } = useLike(id);
  const { comments, deleteComment, publishComment } = useComment(id);
  const { username, mis } = useContext(UserInfoContext);
  const {
    anchorData,
    descData,
    descSwiperData,
    detailContentData,
    moreServiceData,
    breadcrumbData,
    loading,
  } = useDetailData(id, moduleName, moduleId);

  useEffect(() => {
    if (username && mis) {
      pageView({
        cid: 'c_donation_gy3g1qzc',
        custom: {
          username,
          mis,
          accessEnv,
        },
      });
    }
  }, [username, mis]);

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
