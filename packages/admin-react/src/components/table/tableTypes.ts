export type TableDataType<T extends Record<string, unknown>> = {
  key: string;
} & T;

export type ColumnType<T extends Record<string, unknown>> = {
  key: keyof T;
  title: string;
  // eslint-disable-next-line no-unused-vars
  render?: (data: T[keyof T]) => React.ReactNode;
};

export type FunctionsType = {
  // eslint-disable-next-line no-unused-vars
  onClickCheckboxOfItem: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onClickRow: (id: string) => void;
  onClickCheckboxOfAll: () => void;
};
