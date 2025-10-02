export { AdminTable } from './table';

export type DetailColumnsType<
  T extends Record<string, unknown>,
  K extends keyof T = keyof T,
> = {
  key: keyof T;
  title: string;
  sortOrder: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  print: (data: T[K]) => any;
};

export type TableDataType<T extends Record<string, unknown>> = {
  key: string;
  data: T;
};
