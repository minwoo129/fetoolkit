export const forIn = <T extends Record<string, unknown>>(
  object: T,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  iteratee: (value: T[keyof T], key: keyof T, collection: T) => any,
) => {
  for (const key in object) {
    const result = iteratee(object[key], key, object);

    if (result === false) {
      break;
    }
  }
};
