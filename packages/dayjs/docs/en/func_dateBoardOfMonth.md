# dateBoardOfMonth

[English](../en/func_dateBoardOfMonth.md) | [한국어](../ko/func_dateBoardOfMonth.md)

- Returns a 2D date board for calendar UIs based on the month of the given date.
- Since it includes both the first and last weeks of the month, dates from the previous/next month can also be included.

```tsx
dateBoardOfMonth(date);
```

## Example

```tsx
import dayjs from 'dayjs';
import { dateBoardOfMonth } from '@fetoolkit/dayjs';

const board = dateBoardOfMonth(dayjs('2025-12-08'));
/**
 * console.log(board)
 * [
 *   [
 *     { date: '2025-11-30', day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' }, week: { idx: 0 }, isCurrentMonth: false },
 *     { date: '2025-12-01', day: { idx: 1, dayKor: '월요일', dayEng: 'MON' }, week: { idx: 0 }, isCurrentMonth: true },
 *     { date: '2025-12-02', day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' }, week: { idx: 0 }, isCurrentMonth: true },
 *     { date: '2025-12-03', day: { idx: 3, dayKor: '수요일', dayEng: 'WED' }, week: { idx: 0 }, isCurrentMonth: true },
 *     { date: '2025-12-04', day: { idx: 4, dayKor: '목요일', dayEng: 'THU' }, week: { idx: 0 }, isCurrentMonth: true },
 *     { date: '2025-12-05', day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' }, week: { idx: 0 }, isCurrentMonth: true },
 *     { date: '2025-12-06', day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' }, week: { idx: 0 }, isCurrentMonth: true }
 *   ],
 *   [
 *     { date: '2025-12-07', day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-08', day: { idx: 1, dayKor: '월요일', dayEng: 'MON' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-09', day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-10', day: { idx: 3, dayKor: '수요일', dayEng: 'WED' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-11', day: { idx: 4, dayKor: '목요일', dayEng: 'THU' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-12', day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' }, week: { idx: 1 }, isCurrentMonth: true },
 *     { date: '2025-12-13', day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' }, week: { idx: 1 }, isCurrentMonth: true }
 *   ],
 *   [
 *     { date: '2025-12-14', day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-15', day: { idx: 1, dayKor: '월요일', dayEng: 'MON' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-16', day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-17', day: { idx: 3, dayKor: '수요일', dayEng: 'WED' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-18', day: { idx: 4, dayKor: '목요일', dayEng: 'THU' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-19', day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' }, week: { idx: 2 }, isCurrentMonth: true },
 *     { date: '2025-12-20', day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' }, week: { idx: 2 }, isCurrentMonth: true }
 *   ],
 *   [
 *     { date: '2025-12-21', day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-22', day: { idx: 1, dayKor: '월요일', dayEng: 'MON' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-23', day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-24', day: { idx: 3, dayKor: '수요일', dayEng: 'WED' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-25', day: { idx: 4, dayKor: '목요일', dayEng: 'THU' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-26', day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' }, week: { idx: 3 }, isCurrentMonth: true },
 *     { date: '2025-12-27', day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' }, week: { idx: 3 }, isCurrentMonth: true }
 *   ],
 *   [
 *     { date: '2025-12-28', day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' }, week: { idx: 4 }, isCurrentMonth: true },
 *     { date: '2025-12-29', day: { idx: 1, dayKor: '월요일', dayEng: 'MON' }, week: { idx: 4 }, isCurrentMonth: true },
 *     { date: '2025-12-30', day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' }, week: { idx: 4 }, isCurrentMonth: true },
 *     { date: '2025-12-31', day: { idx: 3, dayKor: '수요일', dayEng: 'WED' }, week: { idx: 4 }, isCurrentMonth: true },
 *     { date: '2026-01-01', day: { idx: 4, dayKor: '목요일', dayEng: 'THU' }, week: { idx: 4 }, isCurrentMonth: false },
 *     { date: '2026-01-02', day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' }, week: { idx: 4 }, isCurrentMonth: false },
 *     { date: '2026-01-03', day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' }, week: { idx: 4 }, isCurrentMonth: false }
 *   ]
 * ]
 */
```

## API Reference

- Input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|Date object used to determine the target month|

- Output(type): DateBoardItem[][]
