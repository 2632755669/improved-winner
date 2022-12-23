import { RefObject, useMemo } from 'react';
import './index.less';
import { XVideo } from '../XVideo';

interface Props {
  src: string;
  isVideo?: boolean;
  canPlay?: boolean;
  videoId?: string;
  ref: RefObject<HTMLVideoElement>;
}

export const ImgCover = (props: Props) => {
  const { src, isVideo, canPlay, videoId, ref } = props;

  console.log(canPlay, videoId);

  const srcMemo = useMemo(() => {
    return isVideo ? src : src;
  }, [isVideo, src]);

  return (
    <div className="img-cover">
      {isVideo && canPlay ? <XVideo ref={ref} /> : <img src={srcMemo} alt="" />}
      {isVideo && !canPlay ? <div className="img-cover-play" /> : null}
    </div>
  );
};
