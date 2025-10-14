const formatPhoneNumber = (phoneNumber: string) => {
  // 지역번호가 두자리로 시작하는 경우(서울(02)밖에 없음)
  const isSeoulNumber = phoneNumber.startsWith('02');

  // 12자리 전화번호는 앞자리가 4개
  const is12Number = phoneNumber.length === 12;

  const secondSplitIndex = isSeoulNumber ? 2 : is12Number ? 4 : 3;

  return [
    phoneNumber.slice(0, secondSplitIndex),
    phoneNumber.slice(secondSplitIndex, phoneNumber.length - 4),
    phoneNumber.slice(phoneNumber.length - 4),
  ].join('-');
};

const commaizeNumber = (value: string | number) => {
  const numStr = String(value);
  const decimalPointIndex = numStr.indexOf('.');
  const commaizeRegExp = /(\d)(?=(\d\d\d)+(?!\d))/g;

  return decimalPointIndex > -1
    ? numStr.slice(0, decimalPointIndex).replace(commaizeRegExp, '$1,') +
        numStr.slice(decimalPointIndex)
    : numStr.replace(commaizeRegExp, '$1,');
};

const decommaizeNumber = (numStr: string) => {
  return Number(numStr.replace(/,/g, ''));
};

export const NumbersUtils = {
  /**
   * @deprecated use `formatPhoneNumber` from `[@fetoolkit/utils](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)` instead
   */
  formatPhoneNumber,
  /**
   * @deprecated use `commaizeNumber` from `[@fetoolkit/utils](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)` instead
   */
  commaizeNumber,
  /**
   * @deprecated use `decommaizeNumber` from `[@fetoolkit/utils](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)` instead
   */
  decommaizeNumber,
};
