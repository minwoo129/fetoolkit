export const keys = <T extends Record<string, unknown>>(object: T) => {
  return Object.keys(object);
};
