# Array(last)

- Array 내에 마지막 요소를 반환합니다.

```tsx
ArrayUtils.last(array);
```

## 기본 사용 예시

```tsx
import { ArrayUtils } from '@fetoolkit/react';

const { last } = ArrayUtils;

const testArr = [1, 23, 578, 456, 1234];
const num1 = last(testArr); // 1234
```

## API 문서

- 입력 인자
  - array: T[]
- 반환 타입: T | undefined
