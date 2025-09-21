import type { Path } from './path';

export type PartialPath<
  ObjectType,
  KeyPath extends Path<ObjectType> = Path<ObjectType>,
> = KeyPath extends `${infer K}.${infer Rest}`
  ? K extends keyof ObjectType
    ? {
        [X in keyof ObjectType]: X extends K
          ? PartialPath<ObjectType[K], Rest & Path<ObjectType[K]>> // 더 내려감
          : ObjectType[X];
      }
    : ObjectType // 잘못된 경로면 원본 유지
  : KeyPath extends keyof ObjectType
    ? Omit<ObjectType, KeyPath> & Partial<Pick<ObjectType, KeyPath>> // leaf를 optional로
    : ObjectType;
