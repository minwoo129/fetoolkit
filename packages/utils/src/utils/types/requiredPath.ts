import type { Primitive } from './permitive';

export type RequiredPath<T, P extends string> =
  // 더 내려갈 경로가 있으면 분해
  P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
      ? {
          [X in keyof T]: X extends K
            ? // 중간 노드가 원시여도 "내려가려면" 의미가 없으므로 그대로 둡니다.
              T[X] extends Primitive
              ? T[X]
              : RequiredPath<T[X], Rest>
            : T[X];
        }
      : T // 존재하지 않는 키 → 원본 유지
    : // 리프 도달: 해당 키를 Required 로
      P extends keyof T
      ? Omit<T, P> & Required<Pick<T, P>>
      : T;
