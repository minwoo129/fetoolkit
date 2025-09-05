# Numbers(isPositiveInteger)

- 값이 양의 정수인지 여부를 반환하는 함수입니다.
  - 이때, 0은 양의 정수에 포함하지 않습니다.

```tsx
isPositiveInteger(num);
```

## 기본 사용 예시

```tsx
import { isPositiveInteger } from '@fetoolkit/utils';

const value1 = isPositiveInteger(1); // true
const value2 = isPositiveInteger(-5); // false
const value3 = isPositiveInteger(3.6); // false
const value4 = isPositiveInteger(-7.4); // false
const value5 = isPositiveInteger(0); // false
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true||
- 반환 타입: boolean
