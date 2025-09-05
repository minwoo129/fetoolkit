import { expect, test } from '@playwright/test';

test('ErrorBoundary 실행 테스트', async ({ page }) => {
  await page.goto('http://localhost:5173/error-test');
  await page.getByRole('button', { name: 'throw error' }).click();
  await expect(page.getByText('Error Test')).toBeVisible();
});
