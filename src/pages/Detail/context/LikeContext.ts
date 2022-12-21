import React from 'react';

interface LikeContextType {
  likeAction(): void;
  isLike: boolean;
}

export const LikeContext = React.createContext<LikeContextType>({
  likeAction: () => {},
  isLike: false,
});
