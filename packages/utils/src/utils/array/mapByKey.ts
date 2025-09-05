export const mapByKey = <T extends Record<string, unknown>, K extends keyof T>(
  arr: readonly T[],
  key: K,
): Array<T[K]> => {
  return arr.map((item) => item[key]);
};
