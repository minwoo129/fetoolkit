import { isInteger } from './isInteger';

export const isPositiveInteger = (num: number) => {
  return isInteger(num) && num > 0;
};
