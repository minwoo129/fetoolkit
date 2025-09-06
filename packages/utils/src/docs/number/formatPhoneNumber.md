# Numbers(formatPhoneNumber)

- 전화번호를 하이픈(-)이 들어간 형태로 변환하는 함수입니다.

```tsx
formatPhoneNumber(phoneNumber);
```

## 기본 사용 예시

```tsx
import { formatPhoneNumber } from '@fetoolkit/utils';

const num1 = formatPhoneNumber('01012345678'); // 010-1234-5678
const num2 = formatPhoneNumber('021234567'); // 02-123-4567
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |phoneNumber| string |true|포맷팅할 전화번호|
- 반환 타입: string
