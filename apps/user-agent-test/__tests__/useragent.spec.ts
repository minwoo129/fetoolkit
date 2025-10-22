import { expect, test } from '@playwright/test';

test('useragent', async ({ page }) => {
  await page.goto('http://localhost:3004');
  const testText = await page.getByTestId('user-agent-data').textContent();

  expect(testText).toBeDefined();
});
