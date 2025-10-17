import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3003/test-page-1';

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element').click({
    button: 'right',
  });

  await expect(page.getByTestId('page-layout-default-test')).toBeVisible();
});

test('버튼 클릭 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element').click({
    button: 'right',
  });
  await page.getByRole('listitem').filter({ hasText: '햇빛' }).click();
  await expect(page.getByTestId('print-value')).toHaveText('test-menu-1-sun');
});
