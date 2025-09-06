# Object(values)

- 객체의 열거가능한 프로퍼티 값들을 반환하는 함수입니다.

```tsx
values(object);
```

## 기본 사용 예시

```tsx
import { values } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const keyArr = values(testObj); // [1, 2, 3]
```

## API 문서

- 입력 인자
  |name|type|requried|description|
  |:---:|:---|:---|:---:|
  |object| T |true| 탐색할 객체 |
- 반환 타입: unknown[]
