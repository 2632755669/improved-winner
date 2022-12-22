import { post, HttpResponse } from './index';

/**
 * 获取服务详情
 */
interface ServiceDetailParams {
  serviceId: number;
}

interface ServiceContent {
  content: string;
  title: string;
  id: string;
}

interface HeadInfoItem {
  name: string;
  newVideoId: string;
  type: number;
  url: string;
  videoId: string;
  videoPicture: string;
  videoPictureName: string;
}

interface ServiceDetail {
  title: string;
  type: string;
  usefulCount: number;
  description: string;
  bizIntroduction: string;
  feedbackLink: string;
  label: string[];
  cooperationAdvantage: ServiceContent;
  cooperationCase: {
    cases: string[];
    title: string;
    id: string;
  };
  cooperationCondition: ServiceContent;
  cooperationProcess: ServiceContent;
  questions: ServiceContent;
  headInfo: HeadInfoItem[];
  isUseful: boolean;
}

export const getServiceDetail = (params: ServiceDetailParams) => {
  return post<ServiceDetailParams, HttpResponse<ServiceDetail>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_getservicedetail',
    params,
  ).then((data) => {
    return data;
  });
};
