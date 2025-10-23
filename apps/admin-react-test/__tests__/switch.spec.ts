import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.ADMIN_REACT}/switch-test`;

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('switch1')).toBeVisible();
  await expect(page.getByTestId('switch2')).toBeVisible();
  await expect(page.getByTestId('switch3')).toBeVisible();
  await expect(page.getByTestId('switch4')).toBeVisible();
});

test('element 별 크기 테스트', async ({ page }) => {
  await page.goto(URL);
  const switch1 = page.getByTestId('switch1');
  const switch2 = page.getByTestId('switch2');
  const switch3 = page.getByTestId('switch3');

  const switch1Size = await switch1.boundingBox();
  const switch2Size = await switch2.boundingBox();
  const switch3Size = await switch3.boundingBox();

  expect(switch1Size).toMatchObject({ width: 40, height: 24 });
  expect(switch2Size).toMatchObject({ width: 56, height: 32 });
  expect(switch3Size).toMatchObject({ width: 72, height: 40 });
});

test('switch 클릭 테스트(switch1)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('switch1').click();
  await expect(page.getByTestId('switch1-value')).toBeChecked();

  await page.getByTestId('switch1').click();
  await expect(page.getByTestId('switch1-value')).not.toBeChecked();
});

test('switch 클릭 테스트(switch2)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('switch2').click();
  await expect(page.getByTestId('switch2-value')).toBeChecked();

  await page.getByTestId('switch2').click();
  await expect(page.getByTestId('switch2-value')).not.toBeChecked();
});

test('switch 클릭 테스트(switch3)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('switch3').click();
  await expect(page.getByTestId('switch3-value')).toBeChecked();

  await page.getByTestId('switch3').click();
  await expect(page.getByTestId('switch3-value')).not.toBeChecked();
});

test('switch 클릭 테스트(switch4)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('switch4').click();
  await expect(page.getByTestId('switch4-value')).toBeChecked();

  await page.getByTestId('switch4').click();
  await expect(page.getByTestId('switch4-value')).not.toBeChecked();
});

test('switch 색상 테스트(switch4)', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('switch4').click();
  await expect(page.getByTestId('switch4')).toHaveAttribute(
    'style',
    'background-color: rgb(26, 142, 192);',
  );

  await page.getByTestId('switch4').click();
  await expect(page.getByTestId('switch4')).toHaveAttribute(
    'style',
    'background-color: rgb(178, 179, 180);',
  );
});
