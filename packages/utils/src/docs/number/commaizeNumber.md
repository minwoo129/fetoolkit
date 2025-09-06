# Numbers(commaizeNumber)

- 주어진 숫자를 콤마로 구분하는 함수입니다.

```tsx
commaizeNumber(value);
```

## 기본 사용 예시

```tsx
import { commaizeNumber } from '@fetoolkit/utils';

const num1 = commaizeNumber('13209802'); // 13,209,802
const num2 = commaizeNumber(13209802); // 13,209,802
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |value| string \| number|true|콤마 처리할 숫자|
- 반환 타입: string
