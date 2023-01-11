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

// 数字转千分位
export const thousandthNumber = (num: number): string => {
  if (Number.isNaN(Number(num))) return '0';
  const valueTemp = num.toString();
  let preNum = '';
  let afterNum = '';
  if (valueTemp?.includes?.('.')) {
    const numArr = valueTemp.split('.');
    [preNum, afterNum] = numArr;
    afterNum = `.${afterNum}`;
  } else {
    preNum = valueTemp;
  }
  const reverseNum = preNum.split('').reverse();
  const result = `${reverseNum
    .reduce((pre, item, index) => {
      if (!(index % 3) && index >= 3) pre.push(',');
      pre.push(item);
      return pre;
    }, [] as string[])
    .reverse()
    .join('')}${afterNum}`;
  return result;
};

// 千分位转数字
export const thousandthToNumber = (num: string): number => {
  if (!num) return 0;
  return Number(num.split(',').join(''));
};
