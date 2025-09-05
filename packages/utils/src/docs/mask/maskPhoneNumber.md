# Mask(maskPhoneNumber)

- 휴대폰 번호를 마스킹하는 함수입니다.

```tsx
maskPhoneNumber(phoneNumber);
```

## 기본 사용 예시

```tsx
import { maskPhoneNumber } from '@fetoolkit/utils';

const num1 = maskPhoneNumber('01012345678'); // 010****5678
const num2 = maskPhoneNumber('010-1234-5678'); // 010-****-5678
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |phoneNumber| string |true|마스킹할 전화번호|
- 반환 타입: string
