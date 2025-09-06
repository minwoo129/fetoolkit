# Array(first)

- Array 내에 첫번째 요소를 반환합니다.

```tsx
first(array);
```

## 기본 사용 예시

```tsx
import { first } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = first(testArr); // 1
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
- 반환 타입: T | undefined
