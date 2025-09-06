# Numbers(isNegativeInteger)

- 값이 음의 정수인지 여부를 반환하는 함수입니다.
  - 이때, 0은 양의 정수에 포함하지 않습니다.

```tsx
isNegativeInteger(num);
```

## 기본 사용 예시

```tsx
import { isNegativeInteger } from '@fetoolkit/utils';

const value1 = isNegativeInteger(1); // false
const value2 = isNegativeInteger(-5); // true
const value3 = isNegativeInteger(3.6); // false
const value4 = isNegativeInteger(-7.4); // false
const value5 = isNegativeInteger(0); // false
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true||
- 반환 타입: boolean
