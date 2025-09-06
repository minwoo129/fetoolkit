# Numbers(isInteger)

- 값이 정수인지 여부를 반환하는 함수입니다.
  - 이때, 0도 정수에 포함해서 반환합니다.

```tsx
isInteger(num);
```

## 기본 사용 예시

```tsx
import { isInteger } from '@fetoolkit/utils';

const value1 = isInteger(1); // true
const value2 = isInteger(-5); // true
const value3 = isInteger(3.6); // false
const value4 = isInteger(-7.4); // false
const value5 = isInteger(0); // true
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true||
- 반환 타입: boolean
