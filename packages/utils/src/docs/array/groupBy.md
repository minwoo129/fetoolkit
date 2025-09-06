# Array(groupBy)

- 주어진 키 생성 함수에 따라서 배열의 요소를 분류하는 함수입니다.

```tsx
groupBy(array, getKeyFromItem);
```

## 기본 사용 예시

```tsx
import { groupBy } from '@fetoolkit/utils';

const array = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'pear' },
  { category: 'vegetable', name: 'broccoli' },
];

// {
//     fruit: [
//         { category: 'fruit', name: 'apple' },
//         { category: 'fruit', name: 'banana' },
//         { category: 'fruit', name: 'pear' },
//     ],
//     vegetable: [
//         { category: 'vegetable', name: 'carrot' },
//         { category: 'vegetable', name: 'broccoli' },
//     ]
// }
const value = groupBy(testArr, (item) => item.category);
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
  |getKeyFromItem|(item: T) => PropertyKey|true|요소에서 키를 생성하는 함수|
- 반환 타입: T | undefined
