import { expect, test } from '@playwright/test';
import { PORT } from '../../port';

const URL = `http://localhost:${PORT.CONTEXT_MENU_REACT}/test-page-1`;

test('렌더링 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element1').click({
    button: 'right',
  });
  await expect(
    page.getByTestId('default-context-menu-test-menu-1'),
  ).toBeVisible();
});

test('버튼 클릭 테스트', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element1').click({
    button: 'right',
  });
  await page.getByTestId('default-context-menu-test-menu-1-sun').click();
  await expect(page.getByTestId('print-value')).toHaveText(
    '{"menuId":"test-menu-1","value":"sun"}',
  );
});

test('영역별 메뉴 렌더링 및 버튼 클릭 테스트(가운데)', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element2').click({
    button: 'right',
  });
  await expect(
    page.getByTestId('default-context-menu-test-menu-2'),
  ).toBeVisible();

  const rightClickPos = await page.getByText('Test Element2').boundingBox();

  const menu2 = await page
    .getByTestId('default-context-menu-test-menu-2')
    .boundingBox();

  if (menu2 && rightClickPos) {
    expect(menu2.x).toBeGreaterThanOrEqual(rightClickPos.x);
    expect(menu2.x).toBeLessThanOrEqual(rightClickPos.x + rightClickPos.width);
  }

  await page.getByTestId('default-context-menu-test-menu-2-apple').click();
  await expect(page.getByTestId('print-value')).toHaveText(
    '{"menuId":"test-menu-2","value":"apple"}',
  );
});

test('영역별 메뉴 렌더링 및 버튼 클릭 테스트(오른쪽)', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('Test Element3').click({
    button: 'right',
  });

  await expect(
    page.getByTestId('default-context-menu-test-menu-3'),
  ).toBeVisible();

  const viewport = page.viewportSize();
  const menu3 = await page
    .getByTestId('default-context-menu-test-menu-3')
    .boundingBox();
  if (menu3 && viewport) {
    expect(menu3.x + menu3.width).toBeLessThan(viewport.width);
  }
  await page.getByTestId('default-context-menu-test-menu-3-green').click();
  await expect(page.getByTestId('print-value')).toHaveText(
    '{"menuId":"test-menu-3","value":"green"}',
  );
});
