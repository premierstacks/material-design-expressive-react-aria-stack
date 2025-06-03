import { test } from '@playwright/test';
import { setup } from './test';

test('/', async ({ page }) => {
  await setup(page, '/');
});
