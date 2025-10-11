import type { TableDataType } from '../../components';

export const convertTableDatas = <T extends Record<string, unknown>>(
  datas: T[],
  // eslint-disable-next-line no-unused-vars
  extractKey: (item: T) => string,
) => {
  const results: TableDataType<T>[] = [];

  for (const data of datas) {
    results.push({
      ...data,
      key: extractKey(data),
    });
  }

  return results;
};
