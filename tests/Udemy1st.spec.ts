import { test, expect } from '@playwright/test';
//  I will storing in sepeate variable i will just say that i need test and i need expect
// test function is to declear the test 
// expect function is to write assertion

test('My First test', async ({ page }) => {
  // Go to Playwright homepage
  await page.goto('https://playwright.dev/');

  // Click on the Docs link
  await page.getByRole('link', { name: 'Docs' }).click();

  // Get the Introduction heading
  const heading = page.getByRole('heading', { name: 'Introduction' });

  // Assert the heading text
  await expect(heading).toHaveText('Introduction');
});