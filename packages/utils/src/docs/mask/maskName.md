# Mask(maskName)

- 이름을 마스킹하는 함수입니다.

```tsx
maskName(name);
```

## 기본 사용 예시

```tsx
import { maskName } from '@fetoolkit/utils';

const name1 = maskName('홍길'); // 홍*
const name2 = maskName('홍길동'); // 홍*동
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |name| string |true|마스킹할 이름|
- 반환 타입: string
