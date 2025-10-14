import { expect, test } from '@playwright/test';

test('렌더링 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');
  await expect(page.getByTestId('e2e-test-table')).toBeVisible();
});

test('테이블 헤더 렌더링 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');
  await expect(page.getByTestId('e2e-test-table-head')).toBeVisible();
});

test('테이블 데이터 렌더링 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');
  await expect(page.getByTestId('e2e-test-table-body')).toBeVisible();
});

test('체크박스 전체 선택 기능 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');
  await page.getByTestId('e2e-test-table-checkbox-all').check();
  await page.getByTestId('id-print-button').click();

  await expect(page.getByTestId('e2e-test-table-checkbox-all')).toBeChecked();
  await expect(page.getByTestId('print-value')).toHaveText(
    '["0","1","2","3","4","5","6","7","8","9"]',
  );
});

test('체크박스 개별 선택 기능 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');

  const idx1 = 2;
  const idx2 = 5;
  const idx3 = 8;

  await page.getByTestId(`e2e-test-table-checkbox-${idx1}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx1}`),
  ).toBeChecked();

  await page.getByTestId(`e2e-test-table-checkbox-${idx2}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx2}`),
  ).toBeChecked();

  await page.getByTestId(`e2e-test-table-checkbox-${idx3}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx3}`),
  ).toBeChecked();
});

test('체크박스 선택 해제 기능 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');

  const idx1 = 3;
  const idx2 = 6;
  const idx3 = 9;

  await page.getByTestId(`e2e-test-table-checkbox-${idx1}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx1}`),
  ).toBeChecked();
  await page.getByTestId(`e2e-test-table-checkbox-${idx1}`).uncheck();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx1}`),
  ).not.toBeChecked();

  await page.getByTestId(`e2e-test-table-checkbox-${idx2}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx2}`),
  ).toBeChecked();
  await page.getByTestId(`e2e-test-table-checkbox-${idx2}`).uncheck();

  await page.getByTestId(`e2e-test-table-checkbox-${idx3}`).check();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx3}`),
  ).toBeChecked();
  await page.getByTestId(`e2e-test-table-checkbox-${idx3}`).uncheck();
  await expect(
    page.getByTestId(`e2e-test-table-checkbox-${idx3}`),
  ).not.toBeChecked();
});

test('체크박스 전체 선택 해제 기능 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');

  await page.getByTestId('e2e-test-table-checkbox-all').check();
  await expect(page.getByTestId('e2e-test-table-checkbox-all')).toBeChecked();
  await page.getByTestId('id-print-button').click();
  await expect(page.getByTestId('print-value')).toHaveText(
    '["0","1","2","3","4","5","6","7","8","9"]',
  );

  await page.getByTestId('e2e-test-table-checkbox-all').uncheck();
  await expect(
    page.getByTestId('e2e-test-table-checkbox-all'),
  ).not.toBeChecked();
  await page.getByTestId('id-print-button').click();
  await expect(page.getByTestId('print-value')).toHaveText('[]');
});

test('행 클릭 이벤트 테스트', async ({ page }) => {
  await page.goto('http://localhost:3002/table-test');

  const idx = Math.floor(Math.random() * 10);

  await page.getByTestId(`e2e-test-table-row-${idx}`).click();

  const printValue = await page.getByTestId('print-value').innerText();

  const printValueJson = JSON.parse(printValue);

  expect(printValueJson).toMatchObject({ key: idx.toString() });
});
