import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3001/';
test('test', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByText('Hello World')).toBeVisible();
});
