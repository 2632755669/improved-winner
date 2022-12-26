import { useState, useRef, useImperativeHandle, forwardRef } from 'react';

const videoUrl =
  'https://s3plus.sankuai.com/v1/mss_f5ecef526b384cbaa1117230d53b4bd6/smart/a9868fee-2267-4a86-9209-fa66ac48610b.mp4';

interface Props {
  src?: string;
}

export const XVideo = forwardRef((props: Props, ref) => {
  const { src = videoUrl } = props;
  const [pause, setPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePause = () => setPause(true);
  const handlePlay = () => setPause(false);
  const handlePlayAction = () => {
    if (!videoRef?.current) return;
    videoRef.current.play();
  };

  useImperativeHandle(ref, () => {
    if (!videoRef?.current) return null;
    return {
      pause: videoRef.current.pause.bind(videoRef.current),
    };
  });

  return (
    <div className="w-full h-full xvideo-container">
      <video
        ref={videoRef}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        className="w-full h-full"
      >
        <source src={src} type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" label="chinese_captions" />
      </video>
      {pause ? (
        <div className="img-cover-play" onClick={handlePlayAction} />
      ) : null}
    </div>
  );
});
