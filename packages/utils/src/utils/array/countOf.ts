export const countOf = <T>(
  arr: readonly T[],
  // eslint-disable-next-line no-unused-vars
  predicate: (item: T, index: number) => boolean,
) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += predicate(arr[i], i) ? 1 : 0;
  }

  return count;
};
