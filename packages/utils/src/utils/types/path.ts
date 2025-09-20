import type { Join } from './join';
import type { Primitive } from './permitive';

export type Path<ObjectType> = ObjectType extends Primitive
  ? never
  : ObjectType extends object
    ? {
        [K in Extract<
          keyof ObjectType,
          string
        >]: ObjectType[K] extends Primitive
          ? K
          : ObjectType[K] extends object
            ? K | Join<K, Path<ObjectType[K]>>
            : K;
      }[Extract<keyof ObjectType, string>]
    : never;
