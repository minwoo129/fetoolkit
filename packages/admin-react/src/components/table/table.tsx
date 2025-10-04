import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';
import type { DetailColumnsType, TableDataType } from '.';
import '../../css/table.css';
import { AdminPagination } from '../pagination';
import TableBody from './TableBody';
import TableHead from './TableHead';

type BasicPropsType<T extends Record<string, unknown>> = {
  tableDatas: TableDataType<T>[];
  page: number;
  totalPage: number;
  detailColumns: DetailColumnsType<T>[];
  selectedIds: string[];
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  // eslint-disable-next-line no-unused-vars
  onClickCheckboxOfItem: (id: string) => void;
  onClickCheckboxOfAll: () => void;
};

interface Props<T extends Record<string, unknown>> extends BasicPropsType<T> {
  // eslint-disable-next-line no-unused-vars
  onClickRow?: (id: string) => void;
  className?: string;
  style?: CSSProperties;
}

export const AdminTable = <T extends Record<string, unknown>>({
  tableDatas,
  page,
  totalPage,
  detailColumns,
  selectedIds,
  onClickNextPage,
  onClickCheckboxOfAll,
  onClickCheckboxOfItem,
  onClickPrevPage,
  onClickRow,
  className,
  style,
}: Props<T>) => {
  return (
    <div className={classNames('table-container', className)} style={style}>
      <table className="table">
        <TableHead
          detailColumns={detailColumns}
          onClickCheckboxOfAll={onClickCheckboxOfAll}
          isAllSelected={selectedIds.length === tableDatas.length}
        />
        <TableBody
          detailColumns={detailColumns}
          tableDatas={tableDatas}
          onClickCheckboxOfItem={onClickCheckboxOfItem}
          selectedIds={selectedIds}
          onClickRow={onClickRow}
        />
      </table>
      <AdminPagination
        page={page}
        totalPage={totalPage}
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
        nextPageBtnDisabled={page === totalPage}
        prevPageBtnDisabled={page === 1}
      />
    </div>
  );
};
