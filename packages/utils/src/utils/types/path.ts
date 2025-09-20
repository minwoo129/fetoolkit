import type { Join } from './join';
import type { Primitive } from './permitive';

export type Path<T> = T extends Primitive
  ? never
  : T extends object
    ? {
        [K in Extract<keyof T, string>]: T[K] extends Primitive
          ? K
          : T[K] extends object
            ? K | Join<K, Path<T[K]>>
            : K;
      }[Extract<keyof T, string>]
    : never;
