# Array(uniqArray)

- 배열에 들어가있는 중복 요소를 제거한 새로운 배열을 반환하는 함수입니다.

```tsx
uniqArray(arr);
```

## 기본 사용 예시

```tsx
import { uniqArray } from '@fetoolkit/utils';

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
const arr3 = [true, false, true, false, true, false];
const arr4 = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }, { b: 2 }, { c: 3 }];

const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };
const arr5 = [a, b, c, a, c];

uniqArray(arr1); // [1, 2, 3, 4, 5]
uniqArray(arr2); // ['a', 'b', 'c', 'd', 'e']
uniqArray(arr3); // [true, false]
uniqArray(arr4); // [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }, { b: 2 }, { c: 3 }] => javascript 객체 구조상 동일한 객체로 인식하기 때문입니다.
uniqArray(arr5); // [{ a: 1 }, { b: 2 }, { c: 3 }]
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |arr|T[]|true|탐색할 배열|
- 반환 타입: T[]
