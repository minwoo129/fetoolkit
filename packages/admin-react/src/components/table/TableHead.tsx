import React from 'react';
import type { DetailColumnsType } from '.';
import '../../css/table.css';
import { AdminCheckbox } from '../checkbox';

interface Props<T extends Record<string, unknown>> {
  detailColumns: DetailColumnsType<T>[];
  onClickCheckboxOfAll: () => void;
  isAllSelected: boolean;
}

const TableHead = <T extends Record<string, unknown>>({
  detailColumns,
  onClickCheckboxOfAll,
  isAllSelected,
}: Props<T>) => {
  return (
    <thead>
      <tr>
        <th>
          <AdminCheckbox
            id={'all'}
            checked={isAllSelected}
            onChange={onClickCheckboxOfAll}
          />
        </th>
        {detailColumns.map((column, index) => (
          <th key={index}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
