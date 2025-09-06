# Numbers(decommaizeNumber)

- 콤마로 구분된 숫자에서 콤마만 제거하는 함수입니다.

```tsx
decommaizeNumber(numStr);
```

## 기본 사용 예시

```tsx
import { decommaizeNumber } from '@fetoolkit/utils';

const num1 = decommaizeNumber('13,209,802'); // 13209802
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |numStr| string|true|콤마 제거 전 숫자|
- 반환 타입: number
