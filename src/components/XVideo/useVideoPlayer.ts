import { useState, useCallback, useRef, MutableRefObject } from 'react';
import videojs from 'video.js'; // 只用到了类型声明
// import { CLIENT_TYPE, getClientTypeSync } from '@cap/utils';

import { convertPoster } from './convertPoster';

export type IVideoPlayer = videojs.Player;

interface IParams {
  ref: MutableRefObject<HTMLVideoElement | undefined>;
  hideControl?: boolean;
  events?: Object;
  onReady?: (player: IVideoPlayer) => void;
  onPlay?: (player: IVideoPlayer) => void;
  onEnded?: (player: IVideoPlayer) => void;
  onPause?: (player: IVideoPlayer) => void;
}

export function useVideoPlayer(params: IParams) {
  const { ref, hideControl, events, onReady, onPlay, onEnded, onPause } =
    params;
  const playerRef = useRef<IVideoPlayer>();
  const [isWaiting, setIsWaiting] = useState(true);
  const init = useCallback(
    (autoplay?: boolean): Promise<IVideoPlayer> => {
      if (playerRef.current) return Promise.resolve(playerRef.current);
      // eslint-disable-next-line no-async-promise-executor
      return new Promise((resolve, reject) => {
        // import('@cap/videojs-vhs/src/index' as any)
        import('@cap/videojs-vhs')
          .then((module) => {
            const VideoJs = module.default;
            setTimeout(async () => {
              const player: IVideoPlayer = VideoJs(
                ref?.current as any,
                {
                  // responsive: true,
                  aspectRatio: '16:9',
                  preload: true,
                  muted: autoplay,
                  controlBar: {
                    remainingTimeDisplay: false,
                    playToggle: !hideControl,
                    progressControl: {},
                    fullscreenToggle: {},
                    playbackRateMenuButton: false,
                    pictureInPictureToggle: false,
                    volumePanel: {
                      vertical: true,
                      inline: false,
                    },
                  },
                  plugins: {
                    qualitySelector: { enabled: false },
                  },
                },
                () => {
                  onReady && onReady(player);
                  resolve(player);
                },
              );
              if (hideControl) {
                player.controlBar.hide();
              }
              playerRef.current = player;
              Object.keys(events || {}).forEach((key) => {
                // eslint-disable-next-line no-prototype-builtins
                if (Object.prototype.hasOwnProperty.call(events, key)) {
                  // @ts-ignore
                  const handler = events[key];
                  player.on(key, handler);
                }
              });
              player.on('play', () => {
                setIsWaiting(false);
                onPlay && onPlay(player);
              });
              player.on('ended', () => {
                if (autoplay) {
                  player.play();
                }
                onEnded && onEnded(player);
              });
              player.on('pause', () => {
                onPause && onPause(player);
              });
            });
          })
          .catch((e) => {
            console.error(e);
            reject(e);
          });
      });
    },
    [ref, hideControl, events, onReady, onEnded, onPause, onPlay],
  );

  const play = useCallback(
    async (source: string, poster?: string, autoplay?: boolean) => {
      if (!playerRef.current) {
        await init(autoplay);
      }
      const player = playerRef.current;
      const currPoster = convertPoster(poster || '');
      currPoster && player?.poster(currPoster);
      if (!source) return;
      player?.src(source);

      // if (CLIENT_TYPE.weixin === getClientTypeSync(navigator.userAgent)) {
      //   try {
      //     (window as any).WeixinJSBridge.invoke('getNetworkType', {}, () => {
      //       !!autoplay && player?.play();
      //     });
      //   } catch (error) {
      //     console.log(error);
      //   }
      // } else {
      //   !!autoplay && player?.play();
      // }
    },
    [init],
  );

  const dispose = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    player.dispose();
    playerRef.current = undefined;
  }, []);

  const pause = useCallback(() => {
    setIsWaiting(true);
    playerRef?.current?.pause();
  }, []);

  const unpause = useCallback(() => {
    setIsWaiting(false);
    playerRef?.current?.play();
  }, []);

  return {
    isWaiting,
    play,
    dispose,
    pause,
    unpause,
  };
}
