import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';
import { dateBoardOfMonth } from '../src/features/dateBoardOfMonth';
import type { DateBoardItem } from '../src/types';

type TestCaseItem = {
  date: string;
  expected: DateBoardItem[][];
};

const testCase1: TestCaseItem = {
  date: '2026-02-15',
  expected: [
    [
      {
        date: '2026-02-01',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-02',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-03',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-04',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-05',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-06',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-07',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2026-02-08',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-09',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-10',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-11',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-12',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-13',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-14',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2026-02-15',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-16',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-17',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-18',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-19',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-20',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-21',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2026-02-22',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-23',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-24',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-25',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-26',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-27',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2026-02-28',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
    ],
  ],
};

const testCase2: TestCaseItem = {
  date: '2025-12-08',
  expected: [
    [
      {
        date: '2025-11-30',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 0 },
        isCurrentMonth: false,
      },
      {
        date: '2025-12-01',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-02',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-03',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-04',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-05',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-06',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-12-07',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-08',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-09',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-10',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-11',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-12',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-13',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-12-14',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-15',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-16',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-17',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-18',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-19',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-20',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-12-21',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-22',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-23',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-24',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-25',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-26',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-27',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-12-28',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-29',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-30',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-12-31',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2026-01-01',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 4 },
        isCurrentMonth: false,
      },
      {
        date: '2026-01-02',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 4 },
        isCurrentMonth: false,
      },
      {
        date: '2026-01-03',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 4 },
        isCurrentMonth: false,
      },
    ],
  ],
};

const testCase3: TestCaseItem = {
  date: '2025-07-20',
  expected: [
    [
      {
        date: '2025-06-29',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 0 },
        isCurrentMonth: false,
      },
      {
        date: '2025-06-30',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 0 },
        isCurrentMonth: false,
      },
      {
        date: '2025-07-01',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-02',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-03',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-04',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-05',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 0 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-07-06',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-07',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-08',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-09',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-10',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-11',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-12',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 1 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-07-13',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-14',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-15',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-16',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-17',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-18',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-19',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 2 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-07-20',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-21',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-22',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-23',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-24',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-25',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-26',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 3 },
        isCurrentMonth: true,
      },
    ],
    [
      {
        date: '2025-07-27',
        day: { idx: 0, dayKor: '일요일', dayEng: 'SUN' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-28',
        day: { idx: 1, dayKor: '월요일', dayEng: 'MON' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-29',
        day: { idx: 2, dayKor: '화요일', dayEng: 'TUE' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-30',
        day: { idx: 3, dayKor: '수요일', dayEng: 'WED' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-07-31',
        day: { idx: 4, dayKor: '목요일', dayEng: 'THU' },
        week: { idx: 4 },
        isCurrentMonth: true,
      },
      {
        date: '2025-08-01',
        day: { idx: 5, dayKor: '금요일', dayEng: 'FRI' },
        week: { idx: 4 },
        isCurrentMonth: false,
      },
      {
        date: '2025-08-02',
        day: { idx: 6, dayKor: '토요일', dayEng: 'SAT' },
        week: { idx: 4 },
        isCurrentMonth: false,
      },
    ],
  ],
};

describe('dateBoardOfMonth', () => {
  describe('2026년 2월 데이터 정확도 검사', () => {
    const result = dateBoardOfMonth(dayjs('2026-02-15'));
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        it(`날짜: ${result[i][j].date}`, () =>
          expect(JSON.stringify(result[i][j])).toBe(
            JSON.stringify(testCase1.expected[i][j]),
          ));
      }
    }
  });

  describe('2025년 12월 데이터 정확도 검사', () => {
    const result = dateBoardOfMonth(dayjs('2025-12-08'));
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        it(`날짜: ${result[i][j].date}`, () =>
          expect(JSON.stringify(result[i][j])).toBe(
            JSON.stringify(testCase2.expected[i][j]),
          ));
      }
    }
  });

  describe('2025년 7월 데이터 정확도 검사', () => {
    const result = dateBoardOfMonth(dayjs('2025-07-20'));
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        it(`날짜: ${result[i][j].date}`, () =>
          expect(JSON.stringify(result[i][j])).toBe(
            JSON.stringify(testCase3.expected[i][j]),
          ));
      }
    }
  });
});
