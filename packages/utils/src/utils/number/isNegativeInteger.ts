import { isInteger } from './isInteger';

export const isNegativeInteger = (num: number) => {
  return isInteger(num) && num < 0;
};
