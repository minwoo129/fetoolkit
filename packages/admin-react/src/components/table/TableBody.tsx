import React from 'react';
import '../../css/table.css';
import TableRow from './TableRow';
import type { ColumnType, FunctionsType, TableDataType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  columns: ColumnType<T>[];
  datas: TableDataType<T>[];
  onClickCheckboxOfItem: FunctionsType['onClickCheckboxOfItem'];
  selectedIds: string[];
  onClickRow?: FunctionsType['onClickRow'];
}

const TableBody = <T extends Record<string, unknown>>({
  datas,
  columns,
  onClickCheckboxOfItem,
  selectedIds,
  onClickRow,
}: Props<T>) => {
  return (
    <tbody>
      {datas.map((item) => {
        return (
          <TableRow
            key={item.key}
            columns={columns}
            data={item}
            onClickCheckboxOfItem={onClickCheckboxOfItem}
            isSelected={selectedIds.includes(item.key)}
            onClickRow={onClickRow}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
