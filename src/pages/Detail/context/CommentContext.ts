import React from 'react';
import type { CommentItemType } from '../components/Comment/CommentItem';

interface CommentContextType {
  comments: {
    me: CommentItemType[];
    excellent: CommentItemType[];
  };
  publishComment(content: string): Promise<void>;
  deleteComment(commentId: string): Promise<void>;
}

export const CommentContext = React.createContext<CommentContextType>({
  comments: {
    me: [],
    excellent: [],
  },
  publishComment: () => Promise.resolve(),
  deleteComment: () => Promise.resolve(),
});
