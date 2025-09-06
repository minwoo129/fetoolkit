export const decommaizeNumber = (numStr: string) => {
  return Number(numStr.replace(/,/g, ''));
};
