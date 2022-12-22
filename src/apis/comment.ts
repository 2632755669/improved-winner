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

export const submitComment = (params: SubmitCommentParams) => {
  return post<SubmitCommentParams, HttpResponse<boolean>>(
    '/tmccommentreplyservice_submitcomment',
    params,
  ).then((data) => {
    return data;
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

interface MyCommentItem {
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
export const getMyComment = (params: MyCommentParams) => {
  return post<MyCommentParams, MyCommentList>(
    '/tmccommentreplyservice_getmycomment',
    params,
  ).then((data) => {
    return data;
  });
};

// commentLabel: FEATURED
type ExcellentCommentParams = MyCommentParams;

type ExcellentCommentList = MyCommentList;

// 3、查看精选留言
export const getExcellentComment = (params: ExcellentCommentParams) => {
  return post<ExcellentCommentParams, ExcellentCommentList>(
    '/tmccommentreplyservice_getexcellentcomment',
    params,
  ).then((data) => {
    return data;
  });
};

// 4、删除评论
interface DeleteCommentParams {
  bizType: string;
  commentId: string;
  objectCode: string;
}
export const deleteComment = (params: DeleteCommentParams) => {
  return post<DeleteCommentParams, HttpResponse<boolean>>(
    '/tmccommentreplyservice_deletedcomment',
    params,
  ).then((data) => {
    return data;
  });
};
