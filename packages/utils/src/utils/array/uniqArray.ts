export const uniqArray = <T>(arr: readonly T[]) => {
  return Array.from(new Set(arr));
};
