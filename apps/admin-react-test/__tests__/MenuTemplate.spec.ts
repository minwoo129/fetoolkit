import { expect, test } from '@playwright/test';

const URL = 'http://localhost:3002';

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('app-menu-template-container')).toBeVisible();
});

test('드롭다운 기능 테스트: 열림 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('app-menu-template-dropdown-0-button').click();
  await expect(
    page.getByTestId('app-menu-template-dropdown-0-sub-menu'),
  ).toBeVisible();
});

test('드롭다운 기능 테스트: 닫힘 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('app-menu-template-dropdown-0-button').click();
  await expect(
    page.getByTestId('app-menu-template-dropdown-0-sub-menu'),
  ).toBeVisible();
  await page.getByTestId('app-menu-template-dropdown-0-button').click();
  await expect(
    page.getByTestId('app-menu-template-dropdown-0-sub-menu'),
  ).not.toBeVisible();
});

test('드롭다운 기능 테스트: 링크 접속 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('app-menu-template-dropdown-0-button').click();
  await page.getByTestId('app-menu-template-dropdown-0-sub-0-button').click();
  expect(page.url()).toContain('/test-page-2');
});

test('직접 링크 기능 테스트: 접속 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('app-menu-template-routelink-1-button').click();
  expect(page.url()).toContain('/test-page-4');
});
