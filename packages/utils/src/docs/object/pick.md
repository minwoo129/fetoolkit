# Object(pick)

- 객체에서 특정 키만 포함한 새로운 객체를 생성하는 함수입니다.

```tsx
pick(object, keys);
```

## 기본 사용 예시

```tsx
import { pick } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const value = pick(testObj, ['a', 'c']); // { a: 1, c: 3 }
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| 탐색할 객체 |
  |keys| (K extends keyof T)[] |true| 포함할 key값 |
- 반환 타입: Pick<T, K>
