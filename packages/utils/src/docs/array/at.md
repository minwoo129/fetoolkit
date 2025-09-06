# Array(at)

- Array 내에서 특정 인덱스에 존재하는 요소를 반환하는 함수입니다.
- 음수 인덱스도 지원합니다.

```tsx
at(array, at);
```

## 기본 사용 예시

```tsx
import { at } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = at(testArr, 3); // 578
const num2 = at(testArr, -2); // 456
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
  |at|number|true|원하는 요소의 인덱스|

- 반환 타입: T | undefined
