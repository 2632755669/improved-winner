/**
 * 获取视频资源
 * @param {*} param0
 */
// import Metrics from '@cap/metrics';
import { getVideoSource } from './common';

// eslint-disable-next-line import/prefer-default-export
export const getMediaSource = async (id: string) => {
  const result = await getVideoSource(id);
  const data = result.videoInfo;
  if (data) {
    const { TranscodeSet } = JSON.parse(data || '{}');
    if (!TranscodeSet || TranscodeSet.length <= 0) {
      return Promise.reject(new Error('无效视频资源'));
    }

    const hlsSources: any[] = [];
    TranscodeSet.forEach((level) => {
      if (level.Container?.includes('hls') || level.Url?.endsWith('.m3u8')) {
        const autioCode = level.AudioStreamSet[0] || {};
        const videoCode = level.VideoStreamSet[0] || {};
        const source = {
          src: level.Url,
          bitrate: level.Bitrate,
          height: level.Height,
          width: level.Width,
          duration: level.Duration,
          codec: `${autioCode.Codec}${autioCode.SamplingRate},${videoCode.Codec}`,
          type: 'application/x-mpegURL',
        };
        hlsSources.push(source);
      }
    });

    // 视频源设置
    const source = {
      type: 'video',
      sources: [...hlsSources],
      isAdaptive: false,
      coverImageUrl: result.coverImageUrl,
    };
    return source;
  }
  return Promise.reject(new Error('无权访问此视频资源'));
};
