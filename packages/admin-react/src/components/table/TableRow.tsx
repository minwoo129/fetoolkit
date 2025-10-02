import React from 'react';
import type { DetailColumnsType, TableDataType } from '.';
import '../../css/table.css';
import { AdminCheckbox } from '../checkbox';

interface Props<T extends Record<string, unknown>> {
  detailColumns: DetailColumnsType<T>[];
  data: TableDataType<T>;
  // eslint-disable-next-line no-unused-vars
  onClickCheckboxOfItem: (id: string) => void;
  isSelected: boolean;
  // eslint-disable-next-line no-unused-vars
  onClickRow?: (id: string) => void;
}

const TableRow = <T extends Record<string, unknown>>({
  detailColumns,
  data,
  onClickCheckboxOfItem,
  isSelected,
  onClickRow,
}: Props<T>) => {
  return (
    <tr onClick={() => onClickRow?.(data.key)}>
      <td>
        <AdminCheckbox
          id={data.key}
          checked={isSelected}
          onChange={() => onClickCheckboxOfItem(data.key)}
        />
      </td>
      {detailColumns.map((item, index) => {
        return <td key={index}>{item.print(data.data[item.key])}</td>;
      })}
    </tr>
  );
};

export default TableRow;
