import { expect, test } from '@playwright/test';

test('ContextMenu 실행 테스트', async ({ page }) => {
  await page.goto('http://localhost:5173/context-menu-test');
  await page.getByText('test7').click({
    button: 'right',
  });
  await expect(page.getByTestId('context-menu-custom-test')).toBeVisible();
});

test('ContextMenu 아이템 클릭 테스트', async ({ page }) => {
  const testData = {
    elementId: 'test-124',
    value: 'test1',
  };
  await page.goto('http://localhost:5173/context-menu-test');
  await page.getByText('test2').click({
    button: 'right',
  });
  await page.getByRole('listitem').filter({ hasText: 'test1' }).click();
  await expect(page.getByTestId('data-result-test')).toContainText(
    JSON.stringify(testData),
  );
});
