import dayjs from 'dayjs';
import type { DayType } from '../types/dayType';

const DAYS_KOR = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
] as const;
const DAYS_ENG = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;

export const getDayOfDate = (date: dayjs.Dayjs): DayType => {
  const day = date.day();

  return {
    idx: day,
    dayKor: DAYS_KOR[day],
    dayEng: DAYS_ENG[day],
  };
};
