import type { AdminTableRef } from '@fetoolkit/admin-react';
import { AdminPagination, AdminTable, useTable } from '@fetoolkit/admin-react';
import React, { useMemo, useRef, useState } from 'react';
import { tableColumns1 } from '../constants/table';
import '../css/testPage.css';
import { convertTestTableDatas1 } from '../utils/table';

const TableTestPage = () => {
  const [page, setPage] = useState(1);
  const [printData, setPrintData] = useState('');
  const totalDatas = useMemo(() => {
    return convertTestTableDatas1();
  }, []);
  const tableDatas = useMemo(() => {
    return totalDatas.slice((page - 1) * 10, page * 10);
  }, [page, totalDatas]);
  const maxPage = useMemo(() => {
    return Math.ceil(totalDatas.length / 10);
  }, []);

  const tableRef = useRef<AdminTableRef>(null);
  const { getSelectedIds } = useTable(tableRef);
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <AdminTable
          ref={tableRef}
          columns={tableColumns1}
          datas={tableDatas}
          dataTestId="e2e-test-table"
          onClickRow={(_, data) => {
            setPrintData(JSON.stringify(data));
          }}
          footer={
            <AdminPagination
              page={page}
              totalPage={maxPage}
              onClickNextPage={() => setPage(page + 1)}
              onClickPrevPage={() => setPage(page - 1)}
              nextPageBtnDisabled={page === maxPage}
              prevPageBtnDisabled={page === 1}
            />
          }
        />
      </div>
      <div className="row-items-grid">
        <button
          onClick={() => setPrintData(JSON.stringify(getSelectedIds()))}
          data-testid="id-print-button"
        >
          선택 데이터 아이디 출력
        </button>
      </div>
      <div className="row-items-grid">
        <h3 data-testid="print-value">{printData}</h3>
      </div>
    </div>
  );
};

export default TableTestPage;
