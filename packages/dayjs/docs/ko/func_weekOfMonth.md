# weekOfMonth

[English](../en/func_weekOfMonth.md) | 한국어

- 전달한 날짜가 포함된 월이 달력 기준으로 총 몇 주로 구성되는지 반환하는 함수입니다.
- 월의 시작 주와 마지막 주를 포함해 계산합니다.

```tsx
weekOfMonth(date);
```

## 기본 사용 예시

```tsx
import dayjs from 'dayjs';
import { weekOfMonth } from '@fetoolkit/dayjs';

const weeks = weekOfMonth(dayjs('2025-11-15'));
/**
 * console.log(weeks)
 * 6
 */
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|기준 월을 계산할 날짜 객체|

- 반환 타입: number
