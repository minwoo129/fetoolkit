# 유틸리티 함수 문서 예시(ENG)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# dateBoardOfMonth

English | [한국어](../ko/func_dateBoardOfMonth.md)

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
```

## API Reference

- Input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|Date object used to determine the target month|

- Output(type): DateBoardItem[][]
````
