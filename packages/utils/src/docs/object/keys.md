# Object(keys)

- 객체의 열거가능한 프로퍼티 이름들을 반환하는 함수입니다.

```tsx
keys(object);
```

## 기본 사용 예시

```tsx
import { keys } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const keyArr = keys(testObj); // ['a', 'b', 'c']
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| 탐색할 객체 |
- 반환 타입: string[]
