import { test, expect, chromium } from '@playwright/test';
import { isContext } from 'vm';
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


test('Close cookies', async ({ page }) => {
  // Navigate to the Udemy homepage and wait for the DOM to be ready
  await page.goto('https://www.udemy.com/', { waitUntil: 'domcontentloaded' });

  // Give the cookie banner a short moment to render (some sites render it after JS loads)
  await page.waitForTimeout(1000);

  // Try common cookie-button labels (case-insensitive) — covers 'Accept Cookies', 'Accept all', 'Accept'
  const cookieButton = page.getByRole('button', { name: /accept cookies|accept all|accept/i });

  // Check that the locator resolves to at least one element before attempting to click
  if (await cookieButton.count() > 0) {
    // Click the first matching cookie accept button
    await cookieButton.first().click();
    console.log('Cookie accept button clicked');
  } else {
    // If no cookie button is found, continue the test — not all locales show the banner
    console.log('Cookie accept button not found; continuing without clicking');
  }
});

//npx playwright test --headed  to run the test in headed mode
 
test('Is the cookie banner still present?', async ({ page }) => { 
  await page.goto('https://www.udemy.com/');  // Navigate to the Udemy homepage
  await page.pause(); // Pause the test execution for debugging
});


test('browser fixture', async ({browser}) => {  
  // Here, we are using the browser fixture to create a new browser context and page
  const contxt = await browser.newContext();
  const page = await contxt.newPage();
  await page.goto('https://www.udemy.com/');
  console.log("Page Title using browser fixture:", await page.title());

});

test('browser new page', async () => {  
  // Here, we are manually launching a browser instance and creating a new context and page
  const browser = await chromium.launch({ headless: false }); // Launch browser in headed mode      
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.udemy.com/');
  console.log("Page Title using manual browser launch:", await page.title());
  await browser.close(); // Close the browser after the test
});

//npx playwright test --project=chromium to run in specific browser
