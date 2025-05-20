import { test } from '@playwright/test';

test('/', async ({ page }) => {
  await page.goto('/');
});
