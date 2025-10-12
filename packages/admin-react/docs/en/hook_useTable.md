# useTable

English | [한국어](../ko/hook_useTable.md)

- A Hook to get IDs of selected items in a table.
- Accepts AdminTableRef as a parameter and provides a method that returns an array of IDs of selected items.

## Example

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

## API Reference

### Input(RefObject)

| Name | Type                                                | Required | Description                        |
| ---- | --------------------------------------------------- | -------- | ---------------------------------- |
| ref  | React.RefObject<AdminTableRef \| null \| undefined> | true     | Ref object of AdminTable component |

### Output(object)

```typescript
{
  getSelectedIds: () => string[]
}
```

| Name           | Type           | Description                                                                                                                |
| -------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| getSelectedIds | () => string[] | Method that returns an array of IDs of selected items in the table <br> - Returns an empty array if no items are selected. |
