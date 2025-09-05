const maskStr = (str: string) => {
  return str.replace(/./g, '*');
};

const isSeperatedByHyphen = (phoneNumber: string) => {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber);
};

export const maskPhoneNumber = (phoneNumber: string) => {
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
