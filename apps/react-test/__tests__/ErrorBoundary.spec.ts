import test from '@playwright/test';

const URL = 'http://localhost:3001/error-test';
test('ErrorBoundary 실행 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByRole('button', { name: 'throw error' }).click();
  await page.getByText('Error Test').waitFor();
});
