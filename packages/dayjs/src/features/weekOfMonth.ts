import dayjs from 'dayjs';
import { startAndEndDateOfMonth } from '../utils/startAndEndDateOfMonth';

export const weekOfMonth = (date: dayjs.Dayjs) => {
  const { startDate, endDate } = startAndEndDateOfMonth(date);
  const totalDays = endDate.diff(startDate, 'day');
  return Math.ceil(totalDays / 7);
};
