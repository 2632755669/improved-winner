import { useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import './index.less';
import { XVideo } from '../XVideo';

interface Props {
  src: string;
  isVideo?: boolean;
  canPlay?: boolean;
  videoId?: string;
}

export const ImgCover = forwardRef((props: Props, ref) => {
  const { src, isVideo, canPlay, videoId } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  const srcMemo = useMemo(() => {
    return isVideo ? src : src;
  }, [isVideo, src]);

  useImperativeHandle(ref, () => {
    if (!videoRef.current) return null;
    return {
      pause: videoRef.current?.pause,
    };
  });

  return (
    <div className="img-cover">
      {isVideo && canPlay ? (
        <XVideo ref={videoRef} videoId={videoId} />
      ) : (
        <img src={srcMemo} alt="" />
      )}
      {isVideo && !canPlay ? <div className="img-cover-play" /> : null}
    </div>
  );
});
