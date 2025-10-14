# useTable

[English](../en/hook_useTable.md) | 한국어

- 테이블에서 선택된 항목들의 ID를 가져오기 위한 Hook입니다.
- AdminTableRef를 인자로 받아 선택된 항목들의 ID 배열을 반환하는 메서드를 제공합니다.

## 기본 사용 예시

```tsx
import type { AdminTableRef } from '@fetoolkit/admin-react';
import { useTable, AdminTable } from '@fetoolkit/admin-react';
import React, { useRef } from 'react';

const { getSelectedIds } = useTable(tableRef);
const tableRef = useRef<AdminTableRef>(null);

<AdminTable
  ref={tableRef}
  className="table-test"
  columns={tableColumns}
  datas={testTableDatas}
/>;
```

## API 문서

### Input(RefObject)

| Name | Type                                                | Required | Description                    |
| ---- | --------------------------------------------------- | -------- | ------------------------------ |
| ref  | React.RefObject<AdminTableRef \| null \| undefined> | true     | AdminTable 컴포넌트의 ref 객체 |

### Output(객체)

```typescript
{
  getSelectedIds: () => string[]
}
```

| Name           | Type           | Description                                                                                            |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------ |
| getSelectedIds | () => string[] | 테이블에서 선택된 항목들의 ID 배열을 반환하는 메서드 <br> - 선택된 항목이 없으면 빈 배열을 반환합니다. |
