export const findIndex = <T>(
  arr: readonly T[],
  // eslint-disable-next-line no-unused-vars
  predicate: (item: T, index: number) => unknown,
  fromIndex?: number,
) => {
  let firstIndex = 0;

  if (fromIndex) {
    if (fromIndex >= arr.length) {
      return undefined;
    }

    firstIndex = fromIndex < 0 ? 0 : fromIndex;
  }

  for (let i = firstIndex; i < arr.length; i++) {
    if (predicate(arr[i], i)) {
      return i;
    }
  }

  return undefined;
};
