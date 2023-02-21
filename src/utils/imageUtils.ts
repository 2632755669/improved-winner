/**
 * 判断是否是ven服务上的图片
 * @param src
 */
export const isVenusPic = (src: string) => {
  if (Object.prototype.toString.call(src) === '[object String]') {
    const domains = ['(p0)', '(p1)', '(img)'];
    const srcRegStr = `\\/\\/(${domains.join('|')}){1}\\.hhhh`;
    const srcReg = new RegExp(srcRegStr);
    return srcReg.test(src) && !src.includes('@');
  }
  return false;
};

/**
 * 判断浏览器是否支持webp格式图片
 */
export const isSupportWebp = (() => {
  if (Object.prototype.toString.call(document) === '[object HTMLDocument]') {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas?.toDataURL('image/webp').indexOf('image/webp') === 5;
  }
  return false;
})();

/**
 * 将img转换为webp格式
 */
export const getImgUrl = (src: string) => {
  if (!src) {
    return '';
  }
  const ext = isSupportWebp ? '.webp' : '';
  return isVenusPic(src) ? `${src}${ext}` : src;
};
