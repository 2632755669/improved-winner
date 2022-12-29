import React from 'react';

interface LikeContextType {
  likeAction(): void;
  isLike: boolean;
  likeCount: string;
}

export const LikeContext = React.createContext<LikeContextType>({
  likeAction: () => {},
  isLike: false,
  likeCount: '0',
});
