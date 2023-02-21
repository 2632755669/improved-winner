export function formatNumber(num: number) {
  if (num < 1000) {
    return num;
  }
  const integer = Math.floor(num / 1000);
  const decimals = num % 1000;
  let str = `${integer}k`;
  if (decimals) {
    str += '+';
  }
  return str;
}


// 千分位转数字
export const thousandthToNumber = (num: string): number => {
  if (!num) return 0;
  return Number(num.split(',').join(''));
};
