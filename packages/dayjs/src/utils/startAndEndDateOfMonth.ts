import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

export const startAndEndDateOfMonth = (date: dayjs.Dayjs) => {
  dayjs.extend(weekday);
  const startDate = dayjs(date).startOf('month').weekday(0);
  const endDate = dayjs(date).endOf('month').weekday(6);
  return { startDate, endDate };
};
