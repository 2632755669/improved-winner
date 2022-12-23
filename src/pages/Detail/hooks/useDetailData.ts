import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceDetail } from '../../../apis/detail';
import { detailContentKeys } from '../../../constants';
import {} from '../../../apis/comment';
import { commentList } from '../../../mockData';

export const getDetailConent = (data: any) => {
  const detailList = Object.entries(data).filter(
    (item: any) => detailContentKeys.includes(item[0]) && item[1].title,
  );
  const result = detailList?.map((item: any, index: number) => {
    return {
      id: `detail-${index}`,
      title: item[1].title as string,
      content: item[1].content as string,
    };
  });
  return result;
};

export interface AnchorDataItem {
  id: string;
  title: string;
}

export interface ContentDetailItem {
  id: string;
  title: string;
  content: string;
}

export interface DescData {
  title: string;
  intro: string;
  tags: string[];
  likeCount: number;
}

export interface DescSwiperDataItem {
  imgUrl: string;
  videoCoverUrl: string;
  isVideo: boolean;
  videoId: string;
}

export interface CommentItem {
  avatar: string;
  name: string;
  creatTime: string;
  commentId: string;
  isMyComment: boolean;
  content: string;
}

export const useDetailData = () => {
  const { id } = useParams<{ id: string }>();
  const [anchorData, setAnchorData] = useState<AnchorDataItem[]>([]);
  const [breadcrumbData, setCrumbData] = useState<string[]>([]);
  const [descData, setDescData] = useState<Partial<DescData>>({});
  const [descSwiperData, setDescSwiperData] = useState<DescSwiperDataItem[]>(
    [],
  );
  const detailContentDataState = useState<ContentDetailItem[]>([]);
  const [detailContentData, setDetailContentData] = detailContentDataState;
  const [moreServiceData, setMoreServiceData] = useState<string[]>([]);
  const [commentData, setCommentData] = useState<CommentItem[]>([]);

  const fetchServiceDetail = () => {
    getServiceDetail(Number(id)).then((data) => {
      const contentDetail = getDetailConent(data);
      const anchorResult = contentDetail.map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
      const descResult = {
        title: data.title,
        intro: data.bizIntroduction,
        tags: data.label,
        likeCount: data.usefulCount,
      };
      const descSwiperResult = data.headInfo.map((item) => {
        return {
          imgUrl: item.url as string,
          videoCoverUrl: item.videoPicture as string,
          isVideo: item.type === 1,
          videoId: item.videoId as string,
        };
      });
      setAnchorData(anchorResult);
      setDetailContentData(contentDetail);
      setDescData(descResult);
      setDescSwiperData(descSwiperResult);
      setCommentData(commentList);
      setCrumbData(['首页']);
      setMoreServiceData([]);
    });
  };

  useEffect(() => {
    fetchServiceDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    anchorData,
    breadcrumbData,
    descData,
    descSwiperData,
    detailContentData,
    moreServiceData,
    commentData,
  };
};
