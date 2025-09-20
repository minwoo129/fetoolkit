import type { Path } from './path';

export type PartialPath<
  T,
  P extends Path<T> = Path<T>,
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? {
        [X in keyof T]: X extends K
          ? PartialPath<T[K], Rest & Path<T[K]>> // 더 내려감
          : T[X];
      }
    : T // 잘못된 경로면 원본 유지
  : P extends keyof T
    ? Omit<T, P> & Partial<Pick<T, P>> // leaf를 optional로
    : T;
