export const values = <T extends Record<string, unknown>>(object: T) => {
  return Object.values(object);
};
