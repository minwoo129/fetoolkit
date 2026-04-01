# Utility Type(DateBoardItem)

[English](../en/type_dateboarditem.md) | 한국어

- `dateBoardOfMonth`가 반환하는 2차원 날짜 보드의 각 셀 데이터 타입입니다.
- 날짜 문자열, 요일 정보, 주차 인덱스, 기준 월 포함 여부를 함께 표현합니다.

```tsx
type DateBoardItem = {
  date: string;
  day: DayType;
  week: {
    idx: number;
  };
  isCurrentMonth: boolean;
};
```

## 기본 사용 예시

```tsx
import dayjs from 'dayjs';
import { dateBoardOfMonth } from '@fetoolkit/dayjs';
import type { DateBoardItem } from '@fetoolkit/dayjs';

const board = dateBoardOfMonth(dayjs('2025-12-08'));
const firstCell: DateBoardItem = board[0][0];

/**
 * console.log(firstCell)
 * {
 *   date: '2025-11-30',
 *   day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
 *   week: { idx: 0 },
 *   isCurrentMonth: false
 * }
 */
```
