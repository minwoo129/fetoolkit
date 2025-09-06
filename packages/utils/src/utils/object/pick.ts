export const pick = <T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  const result = {} as Pick<T, K>;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[key] = object[key] as T[K];
  }

  return result;
};
