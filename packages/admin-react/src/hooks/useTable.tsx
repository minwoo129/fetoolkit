import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { DetailColumnsType, TableDataType } from '../components/table';

type ControllTableDataStatusArgs<T extends Record<string, unknown>> =
  | {
      type: 'add';
      data: T[];
    }
  | {
      type: 'delete';
      // eslint-disable-next-line no-unused-vars
      predicate: (value: T, index: number, array: T[]) => unknown;
    }
  | {
      type: 'pageSize';
      size: number;
    }
  | {
      type: 'sort';
      // eslint-disable-next-line no-unused-vars
      sortFunction: (a: T, b: T) => number;
    };

export const useTable = <T extends Record<string, unknown>>(
  defaultData: Required<T>,
) => {
  const { initializeColumns, detailColumns } = useTableColumns(defaultData);
  const {
    tableDatas,
    page,
    totalPage,
    pageSize,
    controlTableDataStatus,
    onClickNextPage,
    onClickPrevPage,
  } = useTableData<T>();
  const { selectedIds, onClickCheckboxOfItem, onClickCheckboxOfAll } =
    useTableDataSelected<T>(tableDatas);

  const returnValue = useMemo(
    () => ({
      initializeColumns,
      controlTableDataStatus,
      basicProps: {
        tableDatas,
        page,
        totalPage,
        pageSize,
        detailColumns,
        selectedIds,
        onClickNextPage,
        onClickPrevPage,
        onClickCheckboxOfItem,
        onClickCheckboxOfAll,
      },
    }),
    [
      initializeColumns,
      controlTableDataStatus,
      page,
      totalPage,
      pageSize,
      detailColumns,
      selectedIds,
      onClickNextPage,
      onClickPrevPage,
      onClickCheckboxOfItem,
      onClickCheckboxOfAll,
      tableDatas,
    ],
  );

  return returnValue;
};

const useTableColumns = <T extends Record<string, unknown>>(
  defaultData: Required<T>,
) => {
  const [detailColumns, setDetailColumns] = useState<DetailColumnsType<T>[]>(
    [],
  );

  /** 컬럼정보 초기화 */
  const initializeColumns = useCallback(
    (columns: { [key in keyof T]: Omit<DetailColumnsType<T, key>, 'key'> }) => {
      const detailColumns: DetailColumnsType<T>[] = Object.keys(columns).map(
        (key) => ({
          key: key as keyof T,
          ...columns[key as keyof T],
        }),
      );

      setDetailColumns(detailColumns.sort((a, b) => a.sortOrder - b.sortOrder));
    },
    [],
  );

  useEffect(() => {
    const columns = Object.keys(defaultData);
    const detailColumns: DetailColumnsType<T>[] = columns.map(
      (column, index) => ({
        key: column,
        title: column,
        sortOrder: index,
        print: (data: T[keyof T]) => data,
      }),
    );
    setDetailColumns(detailColumns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => ({
      initializeColumns,
      detailColumns,
    }),
    [initializeColumns, detailColumns],
  );
};

const useTableData = <T extends Record<string, unknown>>() => {
  const [originalDatas, setOriginalDatas] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalPage, setTotalPage] = useState(1);

  /** 테이블 데이터 */
  const tableDatas: TableDataType<T>[] = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const slicedDatas = originalDatas.slice(start, end);
    return slicedDatas.map((data) => {
      return {
        key: uuidv4(),
        data,
      };
    });
  }, [originalDatas, page, pageSize]);

  const addData = useCallback(
    (data: T[]) => {
      const newDatas = [...originalDatas, ...data];
      setOriginalDatas(newDatas);
      const totalPage = Math.ceil(newDatas.length / pageSize);
      setTotalPage(totalPage);
    },
    [originalDatas, pageSize],
  );

  const deleteData = useCallback(
    // eslint-disable-next-line no-unused-vars
    (predicate: (value: T, index: number, array: T[]) => unknown) => {
      const newDatas = originalDatas.filter(predicate);
      setOriginalDatas(newDatas);
      setPage(1);
      const totalPage = Math.ceil(newDatas.length / pageSize);
      setTotalPage(totalPage);
    },
    [originalDatas, pageSize],
  );

  const _setPageSize = useCallback(
    (size: number) => {
      setPageSize(size);
      setPage(1);
      const totalPage = Math.ceil(originalDatas.length / size);
      setTotalPage(totalPage);
    },
    [originalDatas],
  );

  const _setDataSortOrder = useCallback(
    // eslint-disable-next-line no-unused-vars
    (sortFunction: (a: T, b: T) => number) => {
      const newDatas = [...originalDatas].sort(sortFunction);
      setOriginalDatas(newDatas);
    },
    [originalDatas],
  );

  const controlTableDataStatus = useCallback(
    (args: ControllTableDataStatusArgs<T>) => {
      const { type } = args;
      if (type === 'add') {
        addData(args.data);
        return;
      }

      if (type === 'delete') {
        deleteData(args.predicate);
        return;
      }

      if (type === 'pageSize') {
        _setPageSize(args.size);
        return;
      }

      if (type === 'sort') {
        _setDataSortOrder(args.sortFunction);
        return;
      }
    },
    [addData, deleteData, _setPageSize, _setDataSortOrder],
  );

  const onClickPrevPage = useCallback(() => {
    if (page === 1) return;
    setPage(page - 1);
  }, [page]);

  const onClickNextPage = useCallback(() => {
    if (page === totalPage) return;
    setPage(page + 1);
  }, [page, totalPage]);

  return useMemo(
    () => ({
      tableDatas,
      totalPage,
      page,
      pageSize,
      controlTableDataStatus,
      onClickPrevPage,
      onClickNextPage,
    }),
    [
      tableDatas,
      totalPage,
      page,
      pageSize,
      controlTableDataStatus,
      onClickPrevPage,
      onClickNextPage,
    ],
  );
};

const useTableDataSelected = <T extends Record<string, unknown>>(
  datas: TableDataType<T>[],
) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onClickCheckboxOfItem = useCallback((id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevId) => prevId !== id);
      }
      return [...prev, id];
    });
  }, []);

  const onClickCheckboxOfAll = useCallback(() => {
    setSelectedIds((prev) => {
      if (prev.length === datas.length) {
        return [];
      }

      return datas.map((data) => data.key);
    });
  }, [datas]);

  useEffect(() => {
    setSelectedIds([]);
  }, [datas]);

  return useMemo(
    () => ({
      selectedIds,
      onClickCheckboxOfItem,
      onClickCheckboxOfAll,
    }),
    [selectedIds, onClickCheckboxOfItem, onClickCheckboxOfAll],
  );
};
