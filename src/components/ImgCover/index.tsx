import { useMemo } from 'react';
import './index.less';

interface Props {
  src: string;
  isVideo?: boolean;
  canPlay?: boolean;
  videoId?: string;
}

export const ImgCover = (props: Props) => {
  const { src, isVideo, canPlay, videoId } = props;

  console.log(canPlay, videoId);

  const srcMemo = useMemo(() => {
    return isVideo ? src : src;
  }, [isVideo, src]);

  return (
    <div className="img-cover">
      <img src={srcMemo} alt="" />
      {isVideo ? <div className="img-cover-play" /> : null}
    </div>
  );
};
