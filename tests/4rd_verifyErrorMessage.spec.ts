import { test, expect } from "@playwright/test";

test('Invalid Login Attempt', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // open the login URL

    // Get locators for username and password fields by their placeholder text
    const username = page.getByPlaceholder("Username"); // locator for the username input
    const password = page.getByPlaceholder("Password"); // locator for the password input

    // Click username to ensure focus, then type the username with a per-character delay
    await username.click(); // focus username field
    await username.type("Admin", { delay: 100 }); // type username (simulated typing)

    // Click password to ensure focus, then type an incorrect password with delay
    await password.click(); // focus password field
    await password.type("admin343123", { delay: 100 }); // type invalid password

    // Click the Login button to submit the credentials
    await page.getByRole("button", { name: "Login" }).click(); // submit form

    // Locate the error message element that appears on failed login
    const errorLocator = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']"); // XPath for error text

    // Assert the error message is visible on the page
    await expect(errorLocator).toBeVisible(); // expect the error element to be visible

    // Read the error message text and log it for debugging
    const errorMessage = await errorLocator.textContent(); // extract text from the error element
    console.log("Error message is visible:", errorMessage); // print the error message

});
