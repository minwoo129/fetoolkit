const maskStr = (str: string) => {
  return str.replace(/./g, '*');
};

const isSeperatedByHyphen = (phoneNumber: string) => {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber);
};

const maskPhoneNumber = (phoneNumber: string) => {
  if (isSeperatedByHyphen(phoneNumber)) {
    return phoneNumber.replace(
      /^(\d{2,3})-(\d{3,4})-(\d{4})/,
      (_, $1, $2, $3) => `${$1}-${maskStr($2)}-${$3}`,
    );
  }

  const isSeoulNumber = phoneNumber.startsWith('02');
  if (isSeoulNumber) {
    return phoneNumber.replace(
      /^02(\d{3,4})(\d{4})$/,
      (_, $1, $2) => `02${maskStr($1)}${$2}`,
    );
  }

  return phoneNumber.replace(
    /^(\d{3})(\d{3,4})(\d{4})$/,
    (_, $1, $2, $3) => `${$1}${maskStr($2)}${$3}`,
  );
};

const maskName = (name: string) => {
  const isKoreanName = /[가-힣]{2,}/.test(name);

  if (isKoreanName) {
    if (name.length === 2) {
      return name.replace(/([가-힣])([가-힣]+)/, (_, $1) => `${$1}*`);
    }

    return maskExceptForEdge(name, 1);
  }

  const unmaskedSideSize = name.length < 6 ? 1 : 2;
  return maskExceptForEdge(name, unmaskedSideSize);
};

const maskExceptForEdge = (text: string, edgeSize: number) => {
  return (
    text.slice(0, edgeSize) +
    text
      .slice(edgeSize, text.length - edgeSize)
      .replace(/[a-zA-Z가-힣]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  );
};

export const MaskUtils = {
  /**
   * @deprecated use `maskPhoneNumber` from `[@fetoolkit/utils](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)` instead
   */
  maskPhoneNumber,
  /**
   * @deprecated use `maskName` from `[@fetoolkit/utils](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)` instead
   */
  maskName,
};
