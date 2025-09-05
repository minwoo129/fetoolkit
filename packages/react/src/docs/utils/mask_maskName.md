# Mask(maskName)

- 이름을 마스킹 하는 함수입니다.

## 기본 사용 예시

```tsx
import { MaskUtils } from '@fetoolkit/react';

const { commaizeNumber } = MaskUtils;

const name1 = maskName('홍길'); // 홍*
const name2 = maskName('홍길동'); // 홍*동
```

## API 문서

- 입력 인자: string
- 반환 타입: string
