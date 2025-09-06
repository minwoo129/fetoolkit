/* eslint-disable @typescript-eslint/no-explicit-any */
import { keys } from './keys';

export const isSameObj = (a: Record<any, unknown>, b: Record<any, unknown>) => {
  if (a === b) return true;

  const aKeys = [...keys(a), ...Object.getOwnPropertySymbols(a)];
  const bKeys = [...keys(b), ...Object.getOwnPropertySymbols(b)];

  if (aKeys.length !== bKeys.length) return false;

  // 키가 같은지 확인하면서 동시에 값도 비교
  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!(key in b) || a[key] !== b[key]) return false;
  }

  return true;
};
