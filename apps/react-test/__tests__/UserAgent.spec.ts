import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3001/user-agent-test';

test('useragent', async ({ page }) => {
  await page.goto(URL);
  const testText = await page.getByTestId('user-agent-data').textContent();

  expect(testText).toBeDefined();
});
