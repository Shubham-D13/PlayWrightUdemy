import { test, expect } from '@playwright/test'; 
//  I will storing in sepeate variable i will just say that i need test and i need expect 
// test function is to declear the test 
// expect function is to write assertion 

test('My First test', async ({ page }) => { 
  // its helper function which will help to run the test case 
  await page.goto('https://playwright.dev/'); // Navigate to the Playwright homepage
  const url = await page.url(); // Get the current URL
  console.log("Current URL:", url); // Log the URL to the console 
  const title = await page.title(); // Get the page title
  console.log("Page Title:", title); // Log the title to the console


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await expect(100).toBeGreaterThan(50); // Assertion to check if 100 is greater than 50
});

