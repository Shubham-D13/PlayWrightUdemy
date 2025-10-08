import { test, expect } from "@playwright/test";

//npx playwright show-report --port=9330 to use the report
//npx playwright test --reporter=html --headed

test("Valid Login and Logout", async ({ page }) => {
    // Go to the login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Fill in credentials and log in (use type with delay instead of fill with options)
    await page.getByPlaceholder("Username").type("Admin", { delay: 100 });
    await page.getByPlaceholder("Password").type("admin123", { delay: 100 });
    await page.getByRole("button", { name: "Login" }).click();

    // Assert dashboard is visible and URL is correct
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
    await expect(page).toHaveURL(/dashboard/);

    // Click on the profile picture to open the dropdown
    await page.locator('span.oxd-userdropdown-tab').click();

    // Click the Logout menu item
    await page.getByRole("menuitem", { name: "Logout" }).click();
    // Assert that the user is logged out and redirected to the login page
    await expect(page).toHaveURL(/login/);
});