import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.REACT}/`;

test('test', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByText('Hello World')).toBeVisible();
});
