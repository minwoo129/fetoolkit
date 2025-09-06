# Object(forIn)

- 객체를 순회하면서 각 속성에 대해 iteratee 함수를 호출하는 함수입니다.
  - iteratee 함수에 false를 리턴하면 이 함수의 실행이 종료됩니다.

```tsx
forIn(object, iteratee);
```

## 기본 사용 예시

```tsx
import { forIn } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
forIn(testObj, (value, key) => {
  console.log(`${key}: ${value}`);
});

forIn(testObj, (value, key) => {
  return value !== 2;
});
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| 탐색할 객체 |
  |iteratee| (value: T[keyof T], key: keyof T, collection: T) => any |true| iteratee 함수 |
- 반환 타입: void
