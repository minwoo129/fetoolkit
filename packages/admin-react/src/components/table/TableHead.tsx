import React from 'react';
import '../../css/table.css';
import { AdminCheckbox } from '../checkbox';
import type { ColumnType, FunctionsType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  columns: ColumnType<T>[];
  onClickCheckboxOfAll?: FunctionsType<T>['onClickCheckboxOfAll'];
  isAllSelected: boolean;
  checkboxVisible: boolean;
  dataTestId?: string;
}

const TableHead = <T extends Record<string, unknown>>({
  columns,
  onClickCheckboxOfAll,
  isAllSelected,
  checkboxVisible,
  dataTestId,
}: Props<T>) => {
  return (
    <thead data-testid={dataTestId ? `${dataTestId}-head` : undefined}>
      <tr>
        {checkboxVisible && (
          <th>
            <AdminCheckbox
              id={'all'}
              checked={isAllSelected}
              onChange={onClickCheckboxOfAll}
              data-testid={
                dataTestId ? `${dataTestId}-checkbox-all` : undefined
              }
            />
          </th>
        )}
        {columns.map((column, index) => (
          <th key={index}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
