# convertTableDatas

[English](../en/util_convertTableDatas.md) | 한국어

- 일반 데이터 배열을 테이블 컴포넌트에서 사용할 수 있는 형식으로 변환합니다.
  - 각 데이터 항목에 고유한 key를 추가합니다.

```tsx
convertTableDatas(datas, extractKey);
```

## 기본 사용 예시

```tsx
import { convertTableDatas } from '@fetoolkit/admin-react';

const userData = [
  { id: 1, name: '김철수', age: 25 },
  { id: 2, name: '이영희', age: 30 },
  { id: 3, name: '박민수', age: 28 },
];

const tableData = convertTableDatas(userData, (item) => item.id.toString());
// 결과: [
//   { id: 1, name: '김철수', age: 25, key: '1' },
//   { id: 2, name: '이영희', age: 30, key: '2' },
//   { id: 3, name: '박민수', age: 28, key: '3' }
// ]
```

## API 문서

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |datas|T[]|true|변환할 데이터 배열|
  |extractKey|(item: T) => string|true|각 데이터 항목에서 고유한 key를 추출하는 함수<br>|
- output(type): TableDataType<T>[]
