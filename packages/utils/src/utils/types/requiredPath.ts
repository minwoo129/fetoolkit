import type { Path } from './path';
import type { Primitive } from './permitive';

export type RequiredPath<ObjectType, KeyPath extends Path<ObjectType>> =
  // 더 내려갈 경로가 있으면 분해
  KeyPath extends `${infer K}.${infer Rest}`
    ? K extends keyof ObjectType
      ? {
          [X in keyof ObjectType]: X extends K
            ? // 중간 노드가 원시여도 "내려가려면" 의미가 없으므로 그대로 둡니다.
              ObjectType[X] extends Primitive
              ? ObjectType[X]
              : RequiredPath<ObjectType[X], Rest & Path<ObjectType[X]>>
            : ObjectType[X];
        }
      : ObjectType // 존재하지 않는 키 → 원본 유지
    : // 리프 도달: 해당 키를 Required 로
      KeyPath extends keyof ObjectType
      ? Omit<ObjectType, KeyPath> & Required<Pick<ObjectType, KeyPath>>
      : ObjectType;
