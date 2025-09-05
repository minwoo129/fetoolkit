# Array(countOf)

- 배열에 속해있는 요소 중에서 predicate 메서드 결과에 만족하는 요소들의 개수를 반환합니다.

```tsx
countOf(array, predicate);
```

## 기본 사용 예시

```tsx
import { countOf } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num1 = countOf(testArr, (item) => item % 2 === 0); // 5
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
  |predicate|(item: T, index: number) => boolean|true|요소가 조건에 만족하는지를 검사할 메서드|
- 반환 타입: number
