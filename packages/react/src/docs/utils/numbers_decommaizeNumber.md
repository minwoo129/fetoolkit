# Numbers(decommaizeNumber)

- 콤마로 구분된 숫자에서 콤마만 제거하는 함수입니다.

## 기본 사용 예시

```tsx
import { NumbersUtils } from '@fetoolkit/react';

const { decommaizeNumber } = NumbersUtils;

const num1 = decommaizeNumber('13,209,802'); // 13209802
```

## API 문서

- 입력 인자: string
- 반환 타입: number
