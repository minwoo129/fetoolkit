export const formatPhoneNumber = (phoneNumber: string) => {
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
