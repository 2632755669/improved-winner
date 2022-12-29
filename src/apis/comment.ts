import { format } from 'date-fns';
import { post, HttpResponse } from './index';
import { Page } from './type';

// 1、提交留言
interface SubmitCommentParams {
  bizId: string;
  bizType: number;
  dataSource: number;
  name: string;
  source: number;
  type: number;
  value: string;
}

export const submitCommentApi = (id: string, content: string) => {
  const params = {
    type: 1,
    name: '',
    value: content,
    dataSource: 2,
    source: 1,
    bizId: id,
    bizType: 1,
  };
  return post<SubmitCommentParams, HttpResponse<boolean>>(
    '/sapi/client/v1/tmccommentreplyservice_submitcomment',
    params,
  ).then(({ data, status }) => {
    if (status.code === 0) {
      return data;
    }
    return Promise.reject(data);
  });
};

interface MyCommentParams {
  auditStatus: number;
  bizType: number;
  commentLabel: string;
  objectCode: string;
  pageNo: number;
  pageSize: number;
}

enum labelEnum {
  'FEATURED' = 'FEATURED',
  'NON_FEATURED' = 'NON_FEATURED',
}

export interface MyCommentItem {
  commentId: string;
  content: string;
  createTime: number;
  isMyComment: boolean;
  label: labelEnum;
  userId: string;
  userName: string;
  userMis: string;
  userPic: string;
}

interface MyCommentList extends HttpResponse<MyCommentItem[]> {
  page: Page;
}

// 2、获取我的留言
export const getMyComment = (id: string) => {
  const params = {
    objectCode: id,
    commentLabel: 'NON_FEATURED',
    bizType: 1,
    auditStatus: 1,
    pageNo: 1,
    pageSize: 30,
  };
  return post<MyCommentParams, MyCommentList>(
    '/sapi/client/v1/tmccommentreplyservice_getmycomment',
    params,
  ).then(({ data, status }) => {
    if (status.code === 0) {
      return data?.map((item) => ({
        avatar: item.userPic,
        name: `${item.userName}/${item.userMis}`,
        creatTime: format(new Date(item.createTime), 'MM-dd HH:mm'),
        commentId: item.commentId,
        isMyComment: item.isMyComment,
        content: item.content,
        label: item.label,
      }));
    }
    return Promise.reject();
  });
};

type ExcellentCommentParams = MyCommentParams;

type ExcellentCommentList = MyCommentList;

// 3、查看精选留言
export const getExcellentComment = (id: string) => {
  const params = {
    objectCode: id,
    commentLabel: 'FEATURED',
    bizType: 1,
    auditStatus: 1,
    pageNo: 1,
    pageSize: 30,
  };
  return post<ExcellentCommentParams, ExcellentCommentList>(
    '/sapi/client/v1/tmccommentreplyservice_getexcellentcomment',
    params,
  ).then(({ data, status }) => {
    if (status.code === 0) {
      return data?.map((item) => ({
        avatar: item.userPic,
        name: `${item.userName}/${item.userMis}`,
        creatTime: format(new Date(item.createTime), 'MM-dd HH:mm'),
        commentId: item.commentId,
        isMyComment: item.isMyComment,
        content: item.content,
        label: item.label,
      }));
    }
    return Promise.reject();
  });
};

// 获取所有精选和自己的留言
export const getAllComments = async (id: string) => {
  const myComments = await getMyComment(id);
  const ExcellentComments = await getExcellentComment(id);
  return {
    me: myComments,
    excellent: ExcellentComments,
  };
};

// 4、删除评论
interface DeleteCommentParams {
  bizType: number;
  commentId: string;
  objectCode: string;
}
export const deleteCommentApi = (id: string, commentId: string) => {
  const params = {
    objectCode: id,
    commentId,
    bizType: 1,
  };
  return post<DeleteCommentParams, HttpResponse<boolean>>(
    '/sapi/client/v1/tmccommentreplyservice_deletedcomment',
    params,
  ).then(({ data, status }) => {
    if (status.code === 0) {
      return data;
    }
    return Promise.reject(data);
  });
};
