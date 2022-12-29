/* eslint-disable jsx-a11y/media-has-caption */
import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  RefObject,
} from 'react';
import { getMediaSource } from '../../apis/media';
import { IVideoPlayer, useVideoPlayer } from './useVideoPlayer';
import '@cap/videojs-vhs/dist/vjs.css';
import './index.less';

// const videoUrl =
// 'https://s3plus.sankuai.com/v1/mss_f5ecef526b384cbaa1117230d53b4bd6/smart/a9868fee-2267-4a86-9209-fa66ac48610b.mp4';

interface Props {
  videoId?: string;
  poster?: string;
  autoplay?: boolean;
  hideControl?: boolean;
  events?: Object;
  onReady?: (player: IVideoPlayer) => void;
  onPlay?: (player: IVideoPlayer) => void;
  onEnded?: (player: IVideoPlayer) => void;
  onPause?: (player: IVideoPlayer) => void;
}

export const XVideo = forwardRef((props: Props, ref) => {
  const { videoId = '' } = props;
  const {
    poster,
    autoplay,
    hideControl,
    events,
    onReady,
    onPlay,
    onEnded,
    onPause,
  } = props;
  const [source, setSource] = useState<any>(null);
  const [pause, setPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement>();
  const { play, dispose } = useVideoPlayer({
    ref: videoRef,
    events,
    hideControl,
    onReady,
    onPlay,
    onEnded,
    onPause,
  });

  const handlePause = () => setPause(true);
  const handlePlay = () => setPause(false);
  const handlePlayAction = () => {
    if (!videoRef?.current) return;
    videoRef.current.play();
  };
  // 根据videoId获取视频资源
  const fetchVideoSourceById = () => {
    getMediaSource(videoId).then((data) => {
      console.log(data, '---');
      setSource(data);
    });
  };

  useImperativeHandle(ref, () => {
    if (!videoRef?.current) return null;
    return {
      pause: videoRef.current.pause.bind(videoRef.current),
    };
  });

  useEffect(() => {
    if (source) {
      console.log(source.sources, 'source');
      play?.(source.sources, poster || source.coverImageUrl, autoplay);
    }
    return () => {
      dispose();
    };
  }, [source, poster, autoplay, play, dispose]);

  useEffect(() => {
    fetchVideoSourceById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className="w-full h-full xvideo-container video-js">
      <video
        ref={videoRef as RefObject<HTMLVideoElement>}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        crossOrigin="anonymous"
        playsInline
        className="w-full h-full xvideo-inner"
      >
        <p>您的浏览器不支持 video 标签</p>
      </video>
      {pause ? (
        <div className="img-cover-play" onClick={handlePlayAction} />
      ) : null}
    </div>
  );
});
