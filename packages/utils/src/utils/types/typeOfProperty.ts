import type { Path } from './path';

export type TypeOfProperty<
  T,
  KeyPath extends Path<T>,
> = KeyPath extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? TypeOfProperty<T[K], Rest & Path<T[K]>>
    : never
  : KeyPath extends keyof T
    ? T[KeyPath]
    : never;
