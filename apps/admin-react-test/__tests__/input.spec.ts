import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.ADMIN_REACT}/input-test`;

test('입력 테스트(레이블 없음)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('input1').click();
  await page.getByTestId('input1').fill('test');
  await expect(page.getByTestId('input1')).toHaveValue('test');
});

test('입력 테스트(레이블 있음)', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByText('입력 라벨(테스트)')).toBeVisible();
  await page.getByTestId('input2').click();
  await page.getByTestId('input2').fill('test123');
  await expect(page.getByTestId('input2')).toHaveValue('test123');
});
