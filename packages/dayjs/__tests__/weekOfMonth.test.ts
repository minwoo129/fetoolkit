import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';
import { weekOfMonth } from '../src/features/weekOfMonth';

type TestCaseItem = {
  date: string;
  expected: number;
};

describe('weekOfMonth', () => {
  const testCases: TestCaseItem[] = [
    // 4주: 2월 1일이 일요일이고 28일이 토요일 (달력에 딱 맞는 경우)
    { date: '2026-02-15', expected: 4 },

    // 5주: 일반적인 경우
    { date: '2025-01-15', expected: 5 },
    { date: '2025-04-15', expected: 5 },
    // 5주: 월의 첫 날이 일요일
    { date: '2025-06-15', expected: 5 },
    // 5주: 윤년 2월
    { date: '2024-02-15', expected: 5 },
    // 5주: 월의 마지막 날이 토요일
    { date: '2025-05-15', expected: 5 },

    // 6주: 월의 첫 날이 토요일이고 31일인 달
    { date: '2025-03-15', expected: 6 },
    // 6주: 월의 첫 날이 금요일이고 31일인 달
    { date: '2025-08-15', expected: 6 },
    // 6주: 월의 첫 날이 토요일이고 30일인 달
    { date: '2025-11-15', expected: 6 },
  ];

  testCases.forEach(({ date, expected }) =>
    it(`날짜: ${date}, 기대값: ${expected}`, () => {
      expect(weekOfMonth(dayjs(date))).toBe(expected);
    }),
  );
});
