import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.USER_AGENT}`;

test('useragent', async ({ page }) => {
  await page.goto(URL);
  const testText = await page.getByTestId('user-agent-data').textContent();

  expect(testText).toBeDefined();
});
