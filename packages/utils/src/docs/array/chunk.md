# Array(chunk)

- 배열을 정해진 길이에 맞게 더 작은 배열로 나누는 함수입니다.

```tsx
chunk(array, size);
```

## 기본 사용 예시

```tsx
import { chunk } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = chunk(testArr, 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|탐색할 배열|
  |size|number|true| 자를 크기 <br>(자연수를 입력하지 않으면 에러를 반환합니다.)|

- 반환 타입: T[][]
