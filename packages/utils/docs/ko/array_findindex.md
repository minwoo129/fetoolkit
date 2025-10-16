# Array(findIndex)

[English](../en/array_findindex.md) | 한국어

- 배열에서 조건에 맞는 첫번째 요소의 인덱스를 반환하는 함수입니다.
  - 세번째 fromIndex 인자를 선언하면 해당 index에서부터 탐색을 시작합니다.

```tsx
findIndex(array, predicate, fromIndex);
```

## 기본 사용 예시

```tsx
import { findIndex } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5];
const num1 = findIndex(testArr, (item) => item === 2); // 1
const num2 = findIndex(testArr, (item) => item === 8); // undefined
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
  |predicate| (item: T, index: number) => unknown |true|검사 함수|
  |fromIndex| number |false|탐색을 시작할 첫번째 index|
- 반환 타입: number | undefined
