import { format } from 'date-fns';
import { post, HttpResponse } from './index';
import { Page } from './type';
import { commentList } from '../mockData';

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

export interface MyCommentItem {
  commentId: string;
  content: string;
  createTime: number;
  isMyComment: boolean;
  label: string;
  userId: string;
  userName: string;
  userPic: string;
}

interface MyCommentList extends HttpResponse<MyCommentItem[]> {
  page: Page;
}

// 2、获取我的留言
// label:NON_FEATURED
export const getMyComment = (id: string) => {
  const params = {
    objectCode: id,
    commentLabel: 'NON_FEATURED',
    bizType: 1,
    auditStatus: 1,
    pageNo: 1,
    pageSize: 3,
  };
  return post<MyCommentParams, MyCommentList>(
    '/sapi/client/v1/tmccommentreplyservice_getmycomment',
    params,
  ).then(({ data, status }) => {
    if (status.code === 0) {
      return data?.map((item) => ({
        avatar: item.userPic,
        name: item.userName,
        creatTime: format(item.createTime, 'YYYY/MM/DD'),
        commentId: item.commentId,
        isMyComment: item.isMyComment,
        content: item.content,
      }));
    }
    // return Promise.reject();
    return commentList;
  });
};

// commentLabel: FEATURED
type ExcellentCommentParams = MyCommentParams;

type ExcellentCommentList = MyCommentList;

// 3、查看精选留言
export const getExcellentComment = (params: ExcellentCommentParams) => {
  return post<ExcellentCommentParams, ExcellentCommentList>(
    '/sapi/client/v1/tmccommentreplyservice_getexcellentcomment',
    params,
  ).then((data) => {
    return data;
  });
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
