export const countBy = <T, K extends PropertyKey>(
  arr: readonly T[],
  // eslint-disable-next-line no-unused-vars
  mapper: (item: T) => K,
) => {
  const result = {} as Record<K, number>;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = mapper(item);

    result[key] = (result[key] ?? 0) + 1;
  }

  return result;
};
