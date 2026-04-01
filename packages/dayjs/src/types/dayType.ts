export type DayType = {
  /** 요일 인덱스 */
  idx: number;
  /** 요일 한글 */
  dayKor: DayStrTypeKor;
  /** 요일 영어 */
  dayEng: DayStrTypeEng;
};

export type DayStrTypeKor =
  | '일요일'
  | '월요일'
  | '화요일'
  | '수요일'
  | '목요일'
  | '금요일'
  | '토요일';
export type DayStrTypeEng =
  | 'SUN'
  | 'MON'
  | 'TUE'
  | 'WED'
  | 'THU'
  | 'FRI'
  | 'SAT';
