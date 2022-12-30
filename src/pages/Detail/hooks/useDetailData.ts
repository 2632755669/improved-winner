import { useEffect, useState } from 'react';
import { message } from '@ss/mtd-react';
import { getServiceDetail } from '../../../apis/detail';
import { detailContentKeys } from '../../../constants';
import { getMenuServiceList } from '../../../apis/home';
import { thousandthNumber } from '../../../utils';
import type { CaseItem } from '../components/DetailContent/CaseList';

export const getDetailConent = (data: any) => {
  if (!data) return [];
  const detailList = Object.entries(data)?.filter(
    (item: any) => detailContentKeys.includes(item[0]) && item[1].title,
  );
  const result = detailList?.map((item: any, index: number) => {
    return {
      id: `detail-${index}`,
      cases: item[1].cases,
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
  cases: CaseItem[];
}

export interface DescData {
  title: string;
  intro: string;
  tags: string[];
  likeCount: string;
  isUseful?: boolean;
}

export interface DescSwiperDataItem {
  imgUrl: string;
  videoCoverUrl: string;
  isVideo: boolean;
  videoId: string;
}

export interface MoreServiceDataItem {
  id: number;
  title: string;
  desc: string;
  coverImg: string;
  titleImg: string;
  isVideo: boolean;
  tags: string[];
}

export interface BreadcrumbDataItem {
  title: string;
  path: string;
}

export const useDetailData = (
  id: string,
  moduleName: string,
  moduleId: string,
) => {
  const [loading, setLoading] = useState(false);
  const [anchorData, setAnchorData] = useState<AnchorDataItem[]>([]);
  const [breadcrumbData, setCrumbData] = useState<BreadcrumbDataItem[]>([
    {
      title: '首页',
      path: '/home',
    },
  ]);
  const [descData, setDescData] = useState<Partial<DescData>>({});
  const [descSwiperData, setDescSwiperData] = useState<DescSwiperDataItem[]>(
    [],
  );
  const detailContentDataState = useState<ContentDetailItem[]>([]);
  const [detailContentData, setDetailContentData] = detailContentDataState;
  const [moreServiceData, setMoreServiceData] = useState<MoreServiceDataItem[]>(
    [],
  );

  const fetchServiceDetail = () => {
    setLoading(true);
    getServiceDetail(id)
      .then((data) => {
        const contentDetail = getDetailConent(data);
        const anchorResult = contentDetail?.map((item) => {
          return {
            id: item.id,
            title: item.title,
          };
        });
        const descResult = {
          title: data.title,
          intro: data.bizIntroduction,
          tags: data.label,
          likeCount: thousandthNumber(data.usefulCount),
        };
        const descSwiperResult = data.headInfo?.map((item) => {
          return {
            imgUrl: item.url as string,
            videoCoverUrl: item.videoPicture as string,
            isVideo: item.type === 1,
            videoId: (item.videoId || item.newVideoId) as string,
          };
        });
        setCrumbData([
          {
            title: '首页',
            path: '/home',
          },
          {
            title: moduleName || '测试',
            path: moduleId ? `/home?moduleId=${moduleId}` : '/home',
          },
          {
            title: descResult.title,
            path: '',
          },
        ]);
        setAnchorData(anchorResult);
        setDetailContentData(contentDetail);
        setDescData(descResult);
        setDescSwiperData(descSwiperResult);
      })
      .finally(() => setLoading(false));
    getMenuServiceList(moduleId).then((data) => {
      setMoreServiceData(data?.slice(0, 3) as any);
    });
  };

  useEffect(() => {
    if (id !== 'undefined' && id) {
      fetchServiceDetail();
    } else {
      message.error({ message: '该服务详情不存在' });
      setLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    anchorData,
    breadcrumbData,
    descData,
    descSwiperData,
    detailContentData,
    moreServiceData,
    loading,
  };
};
