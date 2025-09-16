import { test } from '@playwright/test';

test('정상 렌더링 테스트', async ({ page }) => {
  await page.goto('http://localhost:5173/flatlist-test');
  await page.getByTestId('flatlist').isVisible();
});
