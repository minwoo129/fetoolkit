import dayjs from 'dayjs';
import type { DateBoardItem } from '../types/dateBoardItem';
import { getDayOfDate } from '../utils/getDayOfDate';
import { startAndEndDateOfMonth } from '../utils/startAndEndDateOfMonth';

export const dateBoardOfMonth = (date: dayjs.Dayjs) => {
  dayjs();
  const { startDate, endDate } = startAndEndDateOfMonth(date);

  const dateBoard: DateBoardItem[][] = [];
  let weekIdx = 0;

  // 주별 날짜 보드 생성
  for (let i = startDate; i.isBefore(endDate); i = i.add(1, 'week')) {
    const week: DateBoardItem[] = [];
    for (let j = 0; j < 7; j++) {
      const current = i.add(j, 'day');
      week.push({
        date: current.format('YYYY-MM-DD'),
        day: getDayOfDate(current),
        week: { idx: weekIdx },
        isCurrentMonth: current.isSame(date, 'month'),
      });
    }
    dateBoard.push(week);
    weekIdx++;
  }

  return dateBoard;
};
