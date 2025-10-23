# convertTableDatas

English | [한국어](../ko/util_convertTableDatas.md)

- Converts a general data array into a format that can be used in table components.
  - Adds a unique key to each data item.

```tsx
convertTableDatas(datas, extractKey);
```

## Example

```tsx
import { convertTableDatas } from '@fetoolkit/admin-react';

const userData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 28 },
];

const tableData = convertTableDatas(userData, (item) => item.id.toString());
// Result: [
//   { id: 1, name: 'John Doe', age: 25, key: '1' },
//   { id: 2, name: 'Jane Smith', age: 30, key: '2' },
//   { id: 3, name: 'Bob Johnson', age: 28, key: '3' }
// ]
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |datas|T[]|true|Data array to convert|
  |extractKey|(item: T) => string|true|Function to extract unique key from each data item|
- output(type): TableDataType<T>[]
