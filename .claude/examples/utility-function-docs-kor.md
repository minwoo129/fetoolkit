# 유틸리티 함수 문서 예시(KOR)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# dateBoardOfMonth

[English](../en/dateBoardOfMonth.md) | 한국어

- 전달한 날짜가 포함된 월을 기준으로 달력용 2차원 날짜 보드를 반환하는 함수입니다.
- 월의 시작/끝 주를 모두 포함하므로, 이전 달/다음 달 날짜가 함께 포함될 수 있습니다.

```tsx
dateBoardOfMonth(date);
```

## 기본 사용 예시

```tsx
import dayjs from 'dayjs';
import { dateBoardOfMonth } from '@fetoolkit/dayjs';

const board = dateBoardOfMonth(dayjs('2025-12-08'));
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|기준 월을 계산할 날짜 객체|

- 반환 타입: DateBoardItem[][]
````
