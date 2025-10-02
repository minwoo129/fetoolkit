import React from 'react';
import type { DetailColumnsType, TableDataType } from '.';
import '../../css/table.css';
import TableRow from './TableRow';

interface Props<T extends Record<string, unknown>> {
  detailColumns: DetailColumnsType<T>[];
  tableDatas: TableDataType<T>[];
  // eslint-disable-next-line no-unused-vars
  onClickCheckboxOfItem: (id: string) => void;
  selectedIds: string[];
  // eslint-disable-next-line no-unused-vars
  onClickRow?: (id: string) => void;
}

const TableBody = <T extends Record<string, unknown>>({
  tableDatas,
  detailColumns,
  onClickCheckboxOfItem,
  selectedIds,
  onClickRow,
}: Props<T>) => {
  return (
    <tbody>
      {tableDatas.map((item) => {
        return (
          <TableRow
            key={item.key}
            detailColumns={detailColumns}
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
