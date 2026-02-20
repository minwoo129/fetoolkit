import dayjs from 'dayjs';
import type { DateBoardItem } from '../types/dateBoardItem';
import { getDayOfDate } from '../utils/getDayOfDate';
import { startAndEndDateOfMonth } from '../utils/startAndEndDateOfMonth';

export const dateBoardOfMonth = (date: dayjs.Dayjs) => {
  const { startDate, endDate } = startAndEndDateOfMonth(date);

  const dateBoard: DateBoardItem[][] = [];

  // 주별 날짜 보드 생성
  function getWeekDateBoard(
    currentDate: dayjs.Dayjs,
    currentBoard: DateBoardItem[],
  ) {
    if (currentBoard.length === 7) {
      dateBoard.push(currentBoard);
      return;
    }

    currentBoard.push({
      date: currentDate.format('YYYY-MM-DD'),
      day: getDayOfDate(currentDate),
      week: {
        idx: currentBoard.length,
      },
      isCurrentMonth: currentDate.isSame(date, 'month'),
    });

    const nextDate = currentDate.add(1, 'day');

    getWeekDateBoard(nextDate, currentBoard);
  }

  for (let i = startDate; i <= endDate; i = i.add(1, 'week')) {
    getWeekDateBoard(i, []);
  }

  return dateBoard;
};
