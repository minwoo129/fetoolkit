# Object(isSameObj)

- 두 객체가 동일한 객체인지 여부를 반환하는 함수입니다.
  - 객체 key 순서가 달라도 key에 대한 값만 같으면 동일한 객체로 판단합니다.

```tsx
isSameObj(obj1, obj2);
```

## 기본 사용 예시

```tsx
import { isSameObj } from '@fetoolkit/utils';

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };
const obj4 = { b: 2, a: 1, c: 3 };

isSameObj(obj1, obj2); // true
isSameObj(obj1, obj3); // false
isSameObj(obj1, obj4); // true
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |obj1| Record<any, unknown> |true| 탐색할 객체 |
  |obj2| Record<any, unknown> |true| 탐색할 객체 |
- 반환 타입: boolean
