import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';
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
  selectedIds: string[];
  onClickCheckboxOfItem: FunctionsType['onClickCheckboxOfItem'];
  onClickCheckboxOfAll: FunctionsType['onClickCheckboxOfAll'];
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
  return (
    <div className={classNames('table-container', className)} style={style}>
      {header}
      <table className="table">
        <TableHead
          columns={columns}
          onClickCheckboxOfAll={onClickCheckboxOfAll}
          isAllSelected={selectedIds.length === datas.length}
        />
        <TableBody
          columns={columns}
          datas={datas}
          onClickCheckboxOfItem={onClickCheckboxOfItem}
          selectedIds={selectedIds}
          onClickRow={onClickRow}
        />
      </table>
      {footer}
    </div>
  );
};
