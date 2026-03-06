import type { DayType } from './dayType';

export type DateBoardItem = {
  /** 날짜 */
  date: string;
  /** 요일 */
  day: DayType;
  /** 주 */
  week: {
    idx: number;
  };
  /** 같은 달인지 여부 */
  isCurrentMonth: boolean;
};
