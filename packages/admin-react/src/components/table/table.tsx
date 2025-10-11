import classNames from 'classnames';
import type { CSSProperties, ForwardedRef } from 'react';
import React, { useCallback, useImperativeHandle, useState } from 'react';
import '../../css/table.css';
import TableBody from './TableBody';
import TableHead from './TableHead';
import type {
  AdminTableRef,
  ColumnType,
  FunctionsType,
  TableDataType,
} from './tableTypes';

interface Props<T extends Record<string, unknown>> {
  ref?: ForwardedRef<AdminTableRef | null | undefined>;
  onClickRow?: FunctionsType['onClickRow'];
  className?: string;
  style?: CSSProperties;
  datas: TableDataType<T>[];
  columns: ColumnType<T>[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  checkboxVisible?: boolean;
}

export const AdminTable = <T extends Record<string, unknown>>({
  ref,
  datas,
  columns,
  onClickRow,
  className,
  style,
  header,
  footer,
  checkboxVisible = true,
}: Props<T>) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onClickCheckboxOfAll = useCallback(() => {
    if (selectedIds.length === datas.length) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(datas.map((item) => item.key));
  }, [datas, selectedIds]);

  const onClickCheckboxOfItem = useCallback((id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return [...prev].filter((item) => item !== id);
      }

      return [...prev, id];
    });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      getSelectedIds: () => selectedIds,
    }),
    [selectedIds],
  );
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
