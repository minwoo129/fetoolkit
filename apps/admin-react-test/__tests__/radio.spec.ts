import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3002/radio-test';
test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('radio1-1')).toBeVisible();
  await expect(page.getByTestId('radio1-2')).toBeVisible();
  await expect(page.getByTestId('radio2-1')).toBeVisible();
  await expect(page.getByTestId('radio2-2')).toBeVisible();
  await expect(page.getByTestId('radio2-3')).toBeVisible();
  await expect(page.getByTestId('radio2-4')).toBeVisible();
  await expect(page.getByTestId('radio3-1')).toBeVisible();
  await expect(page.getByTestId('radio3-2')).toBeVisible();
  await expect(page.getByTestId('radio3-3')).toBeVisible();
  await expect(page.getByTestId('radio3-4')).toBeVisible();
  await expect(page.getByTestId('radio3-5')).toBeVisible();
});

test('element 별 크기 테스트', async ({ page }) => {
  await page.goto(URL);
  const radio1 = page.getByTestId('radio2-1');
  const radio2 = page.getByTestId('radio2-2');
  const radio3 = page.getByTestId('radio2-3');
  const radio4 = page.getByTestId('radio2-4');

  const radio1Size = await radio1.boundingBox();
  const radio2Size = await radio2.boundingBox();
  const radio3Size = await radio3.boundingBox();
  const radio4Size = await radio4.boundingBox();

  expect(radio1Size).toMatchObject({ width: 16, height: 16 });
  expect(radio2Size).toMatchObject({ width: 20, height: 20 });
  expect(radio3Size).toMatchObject({ width: 24, height: 24 });
  expect(radio4Size).toMatchObject({ width: 28, height: 28 });
});
