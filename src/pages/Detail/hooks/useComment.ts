import { useEffect, useState, useCallback } from 'react';
import { message } from 'xxxxx';
import {
  getAllComments,
  submitCommentApi,
  deleteCommentApi,
} from '../../../apis/comment';
import type { CommentItemType } from '../components/Comment/CommentItem';

export const useComment = (id: string) => {
  const [comments, setComments] = useState<{
    me: CommentItemType[];
    excellent: CommentItemType[];
  }>({
    me: [],
    excellent: [],
  });

  const getComments = useCallback(() => {
    getAllComments(id).then(setComments);
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
