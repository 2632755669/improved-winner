import { post, HttpResponse } from './index';

/**
 * 获取服务详情
 */
interface ServiceDetailParams {
  serviceId: string;
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

export interface CaseContentItem {
  id: string;
  content: string;
  num: string;
  title: string;
  type: number;
}

export interface ServiceDetail {
  title: string;
  type: string;
  usefulCount: number;
  description: string;
  bizIntroduction: string;
  feedbackLink: string;
  label: string[];
  cooperationAdvantage: ServiceContent;
  cooperationCase: {
    cases: CaseContentItem[];
    title: string;
    id: string;
  };
  cooperationCondition: ServiceContent;
  cooperationProcess: ServiceContent;
  questions: ServiceContent;
  headInfo: HeadInfoItem[];
  isUseful: boolean;
}

export const getServiceDetail = (id: string) => {
  const params = { serviceId: id };
  return post<ServiceDetailParams, HttpResponse<ServiceDetail>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_getservicedetail',
    params,
  ).then(({ data, status }) => {
    if (status?.code === 0) {
      return data;
    }
    return Promise.reject();
  });
};

/**
 * 订阅服务
 */

interface SubscribeParams {
  serviceId: string;
}

export const subscribeApi = (id: string) => {
  const params = { serviceId: id };
  return post<SubscribeParams, HttpResponse<string>>(
    '/sapi/client/v1/subscribe',
    params,
  ).then(({ data, status }) => {
    if (status?.code === 0) {
      return data;
    }
    return Promise.reject();
  });
};
/**
 * 取消订阅
 */

export const cancelSubscribeApi = (id: string) => {
  const params = { serviceId: id };
  return post<SubscribeParams, HttpResponse<string>>(
    '/sapi/client/v1/cancel_subscribe',
    params,
  ).then(({ data, status }) => {
    if (status?.code === 0) {
      return data;
    }
    return Promise.reject();
  });
};

/**
 * 获取订阅状态
 */

export const getSubscribeStatusApi = (id: string) => {
  const params = { serviceId: id };
  return post<SubscribeParams, HttpResponse<string>>(
    '/sapi/client/v1/getsubscriber_status',
    params,
  ).then(({ data, status }) => {
    if (status?.code === 0) {
      return data === '1';
    }
    return false;
  });
};

/**
 * 获取订阅人信息
 */

export const getSubscriberApi = (id: string) => {
  const params = { serviceId: id };
  return post<SubscribeParams, HttpResponse<string>>(
    '/sapi/client/v1/getSubscriber',
    params,
  ).then((data) => {
    return data;
  });
};
