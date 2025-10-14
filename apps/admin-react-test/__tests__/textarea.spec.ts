import { expect, test } from '@playwright/test';
const URL = 'http://localhost:3002/textarea-test';

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('textarea')).toBeVisible();
});

test('텍스트 입력 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('textarea').click();
  await page.getByTestId('textarea').fill('testing');
  await expect(page.getByTestId('textarea')).toHaveValue('testing');
});

test('버튼 클릭 테스트', async ({ page }) => {
  await page.goto(URL);

  await expect(
    page.getByTestId('textarea-layout-actions-container'),
  ).toBeVisible();

  await page.getByTestId('textarea-layout-button-0').click();
  await expect(page.getByTestId('print-value')).toHaveText('Clear');
});
