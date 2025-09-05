const at = <T>(array: T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }
  if (at > 0) {
    return array[at % array.length];
  }

  const decIdx = (at * -1) % array.length;
  return decIdx === 0 ? array[0] : array[array.length - decIdx];
};

const first = <T>(array: T[]) => {
  if (array.length === 0) {
    return undefined;
  }

  return array[0];
};

const last = <T>(array: T[]) => {
  if (array.length === 0) {
    return undefined;
  }

  return array[array.length - 1];
};

export const ArrayUtils = {
  at,
  first,
  last,
};
