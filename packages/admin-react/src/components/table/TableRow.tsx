import React from 'react';
import '../../css/table.css';
import { AdminCheckbox } from '../checkbox';
import type { ColumnType, FunctionsType, TableDataType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  columns: ColumnType<T>[];
  data: TableDataType<T>;
  onClickCheckboxOfItem?: FunctionsType['onClickCheckboxOfItem'];
  isSelected: boolean;
  onClickRow?: FunctionsType['onClickRow'];
  checkboxVisible: boolean;
}

const TableRow = <T extends Record<string, unknown>>({
  columns,
  data,
  onClickCheckboxOfItem,
  isSelected,
  onClickRow,
  checkboxVisible,
}: Props<T>) => {
  return (
    <tr onClick={() => onClickRow?.(data.key)}>
      {checkboxVisible && (
        <td>
          <AdminCheckbox
            id={data.key}
            checked={isSelected}
            onChange={() => onClickCheckboxOfItem?.(data.key)}
          />
        </td>
      )}
      {columns.map((item, index) => {
        const { render, key } = item;
        // Extract the actual data value, excluding the 'key' property
        const dataValue = key === 'key' ? undefined : data[key];
        return (
          <td key={index}>
            {render && dataValue !== undefined
              ? render(dataValue)
              : dataValue !== undefined
                ? String(dataValue)
                : ''}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
