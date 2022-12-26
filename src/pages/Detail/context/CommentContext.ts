import React from 'react';
import type { CommentItemType } from '../components/Comment/CommentItem';

interface CommentContextType {
  comments: CommentItemType[];
  publishComment(content: string): Promise<void>;
  deleteComment(commentId: string): Promise<void>;
}

export const CommentContext = React.createContext<CommentContextType>({
  comments: [],
  publishComment: () => Promise.resolve(),
  deleteComment: () => Promise.resolve(),
});
