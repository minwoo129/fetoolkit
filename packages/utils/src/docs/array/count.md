# Array(count)

- 배열의 길이를 반환하는 함수입니다.

```tsx
count(array);
```

## 기본 사용 예시

```tsx
import { count } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = count(testArr); // 5
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
- 반환 타입: number
