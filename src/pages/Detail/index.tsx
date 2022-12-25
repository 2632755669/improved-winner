import { useState } from 'react';
import { Anchor } from './components/Anchor';
import { Breadcrumb } from './components/Breadcrumb';
import { Description } from './components/Description';
import { DetailContent } from './components/DetailContent';
import { MoreService } from './components/MoreService';
import { Comment } from './components/Comment';
import { LikeContext } from './context/LikeContext';
import { useDetailData } from './hooks/useDetailData';
import './index.less';

// 详情页
export const Detail = () => {
  const [isLike, setIsLike] = useState(false);
  const {
    anchorData,
    descData,
    descSwiperData,
    detailContentData,
    commentData,
  } = useDetailData();
  // 点赞
  const likeAction = () => {
    setIsLike(!isLike);
  };

  return (
    <LikeContext.Provider value={{ isLike, likeAction }}>
      <main>
        <section>
          <Breadcrumb />
        </section>
        <section className="flex flex-wrap w-full mt-6">
          <section id="detail-left" className="detail-left flex-1">
            <Description descData={descData} descSwiperData={descSwiperData} />
            <DetailContent data={detailContentData} />
            <Comment commentData={commentData} />
          </section>
          <section className="detail-right hidden xl:block w-320px ml-12">
            <Anchor data={anchorData} />
            <MoreService />
          </section>
        </section>
      </main>
    </LikeContext.Provider>
  );
};
