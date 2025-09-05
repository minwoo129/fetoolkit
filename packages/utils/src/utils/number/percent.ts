export const percent = (num: number, denom: number, unit: number = 0) => {
  if (denom === 0) {
    throw new Error('denominator cannot be 0');
  }

  const result = (num / denom) * 100;
  if (result > 100 || result < 0) {
    throw new Error('result is out of range');
  }

  return result.toFixed(unit);
};
