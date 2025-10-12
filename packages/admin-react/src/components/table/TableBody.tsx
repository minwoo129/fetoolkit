import React from 'react';
import '../../css/table.css';
import TableRow from './TableRow';
import type { ColumnType, FunctionsType, TableDataType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  columns: ColumnType<T>[];
  datas: TableDataType<T>[];
  onClickCheckboxOfItem?: FunctionsType<T>['onClickCheckboxOfItem'];
  selectedIds: string[];
  onClickRow?: FunctionsType<T>['onClickRow'];
  checkboxVisible: boolean;
  dataTestId?: string;
}

const TableBody = <T extends Record<string, unknown>>({
  datas,
  columns,
  onClickCheckboxOfItem,
  selectedIds,
  onClickRow,
  checkboxVisible,
  dataTestId,
}: Props<T>) => {
  return (
    <tbody data-testid={dataTestId ? `${dataTestId}-body` : undefined}>
      {datas.map((item) => {
        return (
          <TableRow
            key={item.key}
            columns={columns}
            data={item}
            onClickCheckboxOfItem={onClickCheckboxOfItem}
            isSelected={selectedIds.includes(item.key)}
            onClickRow={onClickRow}
            checkboxVisible={checkboxVisible}
            dataTestId={dataTestId}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
