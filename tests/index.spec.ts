import { test } from '@playwright/test';
import { waitForIdle } from './assertions';

test('/', async ({ page }) => {
  await page.goto('/');
  await waitForIdle(page);
});
