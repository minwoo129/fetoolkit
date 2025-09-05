export const groupBy = <T, K extends PropertyKey>(
  arr: readonly T[],
  // eslint-disable-next-line no-unused-vars
  getKeyFromItem: (item: T) => K,
): Record<K, T[]> => {
  const result = {} as Record<K, T[]>;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = getKeyFromItem(item);

    if (!Object.hasOwn(result, key)) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};
