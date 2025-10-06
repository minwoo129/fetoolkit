import React from 'react';
import '../../css/table.css';
import { AdminCheckbox } from '../checkbox';
import type { ColumnType, FunctionsType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  columns: ColumnType<T>[];
  onClickCheckboxOfAll: FunctionsType['onClickCheckboxOfAll'];
  isAllSelected: boolean;
}

const TableHead = <T extends Record<string, unknown>>({
  columns,
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
        {columns.map((column, index) => (
          <th key={index}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
