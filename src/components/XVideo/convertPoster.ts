// eslint-disable-next-line import/prefer-default-export
export function dealImageUrl(
  url: string,
  params: string,
  cdn = 's3plus-img.meituan.net',
) {
  if (!url) {
    return '';
  }
  let ret = (url || '')
    .replace(/^http:\/\//, '//')
    .replace(/\/w\.h\//, '/')
    .replace(/(s3plus.sankuai.com|s3plus.meituan.net)/gi, cdn)
    .replace(/msstest.sankuai.com/gi, 'msstest-img.sankuai.com')
    .replace(/msstest.vip.sankuai.com/gi, 'msstest-img.sankuai.com');

  if (params) {
    ret = `${ret}@${params}`;
  }

  return ret;
}

/**
 * 预加载图片
 * @param {*} src
 * @param {*} minWidth
 * @returns
 */
export function loadImage(src: string, minWidth = 1) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    const handler = () => {
      // @ts-ignore
      delete image.onload;
      // @ts-ignore
      delete image.onerror;
      (image.naturalWidth >= minWidth ? resolve : reject)(image);
    };

    Object.assign(image, { onload: handler, onerror: handler, src });
  });
}
/**
 * 视频封面图处理
 * @param {*} url
 * @returns
 */
export const convertPoster = (url: string) => {
  if (!url) return '';
  let params = '750w_1e_1c_60q';
  if (url.indexOf('@') > -1) {
    params = '';
  }
  return dealImageUrl(url, params);
};
