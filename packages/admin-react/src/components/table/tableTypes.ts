export type TableDataType<T extends Record<string, unknown>> = {
  key: string;
} & T;

export type ColumnType<T extends Record<string, unknown>> = {
  [K in keyof T]: {
    key: K;
    title: string;
    // eslint-disable-next-line no-unused-vars
    render?: (data: T[K]) => React.ReactNode;
  };
}[keyof T];

export type FunctionsType<T extends Record<string, unknown>> = {
  // eslint-disable-next-line no-unused-vars
  onClickCheckboxOfItem: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onClickRow: (id: string, data: T) => void;
  onClickCheckboxOfAll: () => void;
};

export type AdminTableRef = {
  getSelectedIds: () => string[];
};
