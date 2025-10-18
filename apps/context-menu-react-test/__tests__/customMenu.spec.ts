import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3003/test-page-2';

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element').click({
    button: 'right',
  });
  await expect(page.getByTestId('app-context-menu')).toBeVisible();
});

test('버튼 클릭 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element').click({
    button: 'right',
  });
  await expect(page.getByTestId('app-context-menu')).toBeVisible();
  await page.getByTestId('app-context-menu-item-apple').click();
  await expect(page.getByTestId('print-value')).toHaveText('test-menu-2-apple');
});
