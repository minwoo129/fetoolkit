import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.ADMIN_REACT}/dropdown-test`;

test('드롭다운 렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  // TODO: 드롭다운 컴포넌트가 올바르게 렌더링되는지 확인
  await expect(page.getByTestId('e2e-test-dropdown1')).toBeVisible();
});

test('드롭다운 메뉴 열기 테스트(제목버튼)', async ({ page }) => {
  await page.goto(URL);
  // TODO: 제목 버튼 클릭으로 메뉴가 열리는지 확인
  await page.getByTestId('e2e-test-dropdown1-title-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeVisible();
});

test('드롭다운 메뉴 열기 테스트(화살표버튼)', async ({ page }) => {
  await page.goto(URL);
  // TODO: 제목 버튼 클릭으로 메뉴가 열리는지 확인
  await page.getByTestId('e2e-test-dropdown1-arrow-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeVisible();
});

test('드롭다운 메뉴 닫기 테스트(제목버튼)', async ({ page }) => {
  await page.goto(URL);
  // TODO: 제목 버튼 재클릭으로 메뉴가 닫히는지 확인
  await page.getByTestId('e2e-test-dropdown1-title-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeVisible();

  await page.getByTestId('e2e-test-dropdown1-title-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeHidden();
});

test('드롭다운 메뉴 닫기 테스트(화살표버튼)', async ({ page }) => {
  await page.goto(URL);
  // TODO: 제목 버튼 재클릭으로 메뉴가 닫히는지 확인
  await page.getByTestId('e2e-test-dropdown1-arrow-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeVisible();

  await page.getByTestId('e2e-test-dropdown1-arrow-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeHidden();
});

test('드롭다운 메뉴 아이템 클릭 테스트', async ({ page }) => {
  await page.goto(URL);
  // 드롭다운 버튼 클릭
  await page.getByTestId('e2e-test-dropdown1-title-button').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeVisible();
  // 메뉴 아이템 클릭
  await page.getByTestId('e2e-test-dropdown1-menu-item-0').click();
  await expect(page.getByTestId('e2e-test-dropdown1-menu')).toBeHidden();
  // 출력 값 확인
  await expect(page.getByTestId('print-value')).toHaveText('Storefront');
});
