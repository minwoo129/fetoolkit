import dayjs from 'dayjs';
import type { DayType } from '../types/dayType';
export const getDayOfDate = (date: dayjs.Dayjs): DayType => {
  const day = date.day();

  if (day === 0) {
    return {
      idx: 0,
      dayKor: '일요일',
      dayEng: 'SUN',
    };
  }
  if (day === 1) {
    return {
      idx: 1,
      dayKor: '월요일',
      dayEng: 'MON',
    };
  }
  if (day === 2) {
    return {
      idx: 2,
      dayKor: '화요일',
      dayEng: 'TUE',
    };
  }
  if (day === 3) {
    return {
      idx: 3,
      dayKor: '수요일',
      dayEng: 'WED',
    };
  }
  if (day === 4) {
    return {
      idx: 4,
      dayKor: '목요일',
      dayEng: 'THU',
    };
  }
  if (day === 5) {
    return {
      idx: 5,
      dayKor: '금요일',
      dayEng: 'FRI',
    };
  }

  return {
    idx: 6,
    dayKor: '토요일',
    dayEng: 'SAT',
  };
};
