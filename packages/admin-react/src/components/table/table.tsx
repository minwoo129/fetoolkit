import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';
import '../../css/table.css';
import TableBody from './TableBody';
import TableHead from './TableHead';
import type { ColumnType, FunctionsType, TableDataType } from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  onClickRow?: FunctionsType['onClickRow'];
  className?: string;
  style?: CSSProperties;
  datas: TableDataType<T>[];
  columns: ColumnType<T>[];
  selectedIds?: string[];
  onClickCheckboxOfItem?: FunctionsType['onClickCheckboxOfItem'];
  onClickCheckboxOfAll?: FunctionsType['onClickCheckboxOfAll'];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const AdminTable = <T extends Record<string, unknown>>({
  datas,
  columns,
  selectedIds,
  onClickCheckboxOfAll,
  onClickCheckboxOfItem,
  onClickRow,
  className,
  style,
  header,
  footer,
}: Props<T>) => {
  const checkboxVisible = useMemo(() => {
    if (!onClickCheckboxOfAll) return false;
    if (!onClickCheckboxOfItem) return false;
    if (selectedIds === undefined) return false;
    return true;
  }, [onClickCheckboxOfAll, onClickCheckboxOfItem, selectedIds]);
  return (
    <div className={classNames('table-container', className)} style={style}>
      {header}
      <table className="table">
        <TableHead
          columns={columns}
          onClickCheckboxOfAll={onClickCheckboxOfAll}
          isAllSelected={(selectedIds ?? []).length === datas.length}
          checkboxVisible={checkboxVisible}
        />
        <TableBody
          columns={columns}
          datas={datas}
          onClickCheckboxOfItem={onClickCheckboxOfItem}
          selectedIds={selectedIds ?? []}
          onClickRow={onClickRow}
          checkboxVisible={checkboxVisible}
        />
      </table>
      {footer}
    </div>
  );
};
