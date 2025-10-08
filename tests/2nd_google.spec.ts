import {test, expect} from '@playwright/test';
//  I will storing in sepeate variable i will just say that i need test and
// below using test function we can create test cases

test("Verify Application Title", async ({ page }) => {
    // its helper function which will help to run the test case

    await page.goto("https://google.com"); // Navigate to the Google homepage
    const url = await page.url(); // Get the current URL
    console.log("Current URL:", url); // Log the URL to the console

    // Get the page title to extra method 
    const title = await page.title(); // Get the page title
    console.log("Page Title:", title); // Log the title to the console
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/); // Assert that the page title contains "Google"
    
    
});