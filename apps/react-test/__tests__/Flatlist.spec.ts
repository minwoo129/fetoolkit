import { test } from '@playwright/test';

const URL = 'http://localhost:3001/flatlist-test';

test('정상 렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('flatlist').isVisible();
});
