import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.ADMIN_REACT}/checkbox-test`;

test('렌더링 테스트 ', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('checkbox1')).toBeVisible();
  await expect(page.getByTestId('checkbox2')).toBeVisible();
  await expect(page.getByTestId('checkbox3')).toBeVisible();
  await expect(page.getByTestId('checkbox4')).toBeVisible();
  await expect(page.getByTestId('checkbox5')).toBeVisible();
});

test('element 별 크기 테스트', async ({ page }) => {
  await page.goto(URL);
  const checkbox1 = page.getByTestId('checkbox1');
  const checkbox2 = page.getByTestId('checkbox2');
  const checkbox3 = page.getByTestId('checkbox3');
  const checkbox4 = page.getByTestId('checkbox4');
  const checkbox5 = page.getByTestId('checkbox5');

  const checkbox1Size = await checkbox1.boundingBox();
  const checkbox2Size = await checkbox2.boundingBox();
  const checkbox3Size = await checkbox3.boundingBox();
  const checkbox4Size = await checkbox4.boundingBox();
  const checkbox5Size = await checkbox5.boundingBox();

  expect(checkbox1Size).toMatchObject({ width: 16, height: 16 });
  expect(checkbox2Size).toMatchObject({ width: 24, height: 24 });
  expect(checkbox3Size).toMatchObject({ width: 32, height: 32 });
  expect(checkbox4Size).toMatchObject({ width: 40, height: 40 });
  expect(checkbox5Size).toMatchObject({ width: 48, height: 48 });
});

test('checkbox 클릭 테스트(checkbox1)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('checkbox1').click();
  await expect(page.getByTestId('checkbox1')).toBeChecked();

  await page.getByTestId('checkbox1').click();
  await expect(page.getByTestId('checkbox1')).not.toBeChecked();
});

test('checkbox 클릭 테스트(checkbox2)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('checkbox2').click();
  await expect(page.getByTestId('checkbox2')).toBeChecked();

  await page.getByTestId('checkbox2').click();
  await expect(page.getByTestId('checkbox2')).not.toBeChecked();
});

test('checkbox 클릭 테스트(checkbox3)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('checkbox3').click();
  await expect(page.getByTestId('checkbox3')).toBeChecked();

  await page.getByTestId('checkbox3').click();
  await expect(page.getByTestId('checkbox3')).not.toBeChecked();
});

test('checkbox 클릭 테스트(checkbox4)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('checkbox4').click();
  await expect(page.getByTestId('checkbox4')).toBeChecked();

  await page.getByTestId('checkbox4').click();
  await expect(page.getByTestId('checkbox4')).not.toBeChecked();
});

test('checkbox 클릭 테스트(checkbox5)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('checkbox5').click();
  await expect(page.getByTestId('checkbox5')).toBeChecked();

  await page.getByTestId('checkbox5').click();
  await expect(page.getByTestId('checkbox5')).not.toBeChecked();
});
