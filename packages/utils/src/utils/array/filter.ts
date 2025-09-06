// eslint-disable-next-line no-unused-vars
type FilterActionType<T> = (item: T, index: number) => boolean;

export const filter = <T>(
  array: readonly T[],
  filterBy: number[] | FilterActionType<T>,
) => {
  if (Array.isArray(filterBy)) {
    return array.filter((_, index) => filterBy.includes(index));
  }

  return array.filter(filterBy);
};
