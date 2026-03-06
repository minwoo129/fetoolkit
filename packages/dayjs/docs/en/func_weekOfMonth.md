# weekOfMonth

English | [한국어](../ko/func_weekOfMonth.md)

- Returns how many weeks the month of the given date spans in a calendar layout.
- The calculation includes both the first and last calendar weeks of the month.

```tsx
weekOfMonth(date);
```

## Example

```tsx
import dayjs from 'dayjs';
import { weekOfMonth } from '@fetoolkit/dayjs';

const weeks = weekOfMonth(dayjs('2025-11-15'));
/**
 * console.log(weeks)
 * 6
 */
```

## API Reference

- Input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|Date object used to determine the target month|

- Output(type): number
