export const omit = <T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  const result = { ...object };

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    delete result[key];
  }

  return result as Omit<T, K>;
};
