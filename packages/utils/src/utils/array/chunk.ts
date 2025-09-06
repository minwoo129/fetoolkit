import { isPositiveInteger } from '../number';

export const chunk = <T>(arr: readonly T[], size: number): T[][] => {
  if (!isPositiveInteger(size)) {
    throw new Error('size must be a positive integer');
  }

  const chunkLength = Math.ceil(arr.length / size);

  const result: T[][] = [];
  for (let i = 0; i < chunkLength; i++) {
    const start = i * size;
    const end = start + size;
    result.push(arr.slice(start, end));
  }
  return result;
};
