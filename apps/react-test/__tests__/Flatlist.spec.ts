import { test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.REACT}/flatlist-test`;

test('정상 렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('flatlist').isVisible();
});
