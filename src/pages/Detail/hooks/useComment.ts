import { useEffect, useState, useCallback } from 'react';
import { message } from '@ss/mtd-react';
import {
  getMyComment,
  submitCommentApi,
  deleteCommentApi,
} from '../../../apis/comment';
import type { CommentItemType } from '../components/Comment/CommentItem';

export const useComment = (id: string) => {
  const [comments, setComments] = useState<CommentItemType[]>([]);

  const getComments = useCallback(() => {
    getMyComment(id).then(setComments);
  }, [id]);

  const publishComment = useCallback(
    (content: string) => {
      return submitCommentApi(id, content).then(() => {
        message.success({ message: '评论成功' });
        getComments();
      });
    },
    [id, getComments],
  );

  const deleteComment = useCallback(
    (commentId: string) => {
      return deleteCommentApi(id, commentId).then(() => {
        message.success({ message: '删除成功' });
        getComments();
      });
    },
    [id, getComments],
  );

  useEffect(() => {
    getComments();
  }, [getComments]);

  return { comments, publishComment, deleteComment };
};
