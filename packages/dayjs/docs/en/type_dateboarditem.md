# Utility Type(DateBoardItem)

English | [한국어](../ko/type_dateboarditem.md)

- Data type for each cell in the 2D date board returned by `dateBoardOfMonth`.
- Includes the date string, day information, week index, and whether the date belongs to the target month.

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

## Example

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
