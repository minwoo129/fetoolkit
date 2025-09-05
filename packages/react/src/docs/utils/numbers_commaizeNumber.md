# Numbers(commaizeNumber)

- 주어진 숫자를 콤마로 구분하는 함수입니다.

## 기본 사용 예시

```tsx
import { NumbersUtils } from '@fetoolkit/react';

const { commaizeNumber } = NumbersUtils;

const num1 = commaizeNumber('13209802'); // 13,209,802
const num2 = commaizeNumber(13209802); // 13,209,802
```

## API 문서

- 입력 인자: string | number
- 반환 타입: string
