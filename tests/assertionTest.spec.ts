import { test, expect } from '@playwright/test';

test('Visible/Hiddien', async ({ page }) => {
        await page.goto('https://www.letskodeit.com/practice');
        expect(await page.locator('#displayed-text')).toBeVisible();
        await page.locator('#hide-textbox').click();
        expect(await page.locator('#displayed-text')).toBeHidden();
        await page.locator('#show-textbox').click();
        expect(await page.locator('#displayed-text')).toBeVisible();
        await page.locator('#displayed-text').fill('Playwright');
        //  await page.pause();
});

// test.only('Present/NotPresent', async ({page}) =>{
//     await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
//     expect(await page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
//     await page.locator('text=Add Element').click();
//     expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
//     await page.locator('text=Add Element').click();
//     await page.locator('text=Add Element').click();
//     expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(3);

//     await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
//     await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
//     expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);


//     });

test('Enable/Disabled', async ({ page }) => {
        await page.goto('https://letcode.in/button');

        // Check the whether its enabled or disabled

        // await page.pause();
        // const enabledState = await page.locator('#home').isEnabled();
        // console.log(enabledState)

        expect(await page.locator('#home')).toBeEnabled();
        expect(await page.locator('button[title="Disabled Button]')).toBeDisabled();

});



test('Text Match and mismatch', async ({ page }) => {
        await page.goto('https://letcode.in/button');
        await expect(page.locator('#home')).toHaveText('Goto Home');
        await expect(page.locator('#home')).not.toHaveText('Shubham');
        await expect(page.locator('button[title="Disabled button"]')).toHaveText('Disabled');

});

test('Element Attributes', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username')
        await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /oxd-input.*/);
});

test('URL and Title', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        // First way to verify that URL
        await expect(await page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Second way to verify that URL
        await expect(await page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Partial URL Assertion
        await expect(await page).toHaveURL(/source-demo.orangehrmlive/);

        expect(await page.title()).toEqual('OrangeHRM');
        await expect(await page).toHaveTitle('OrangeHRM');

        //Partial Title Assertion
        // expect(await page.title()).toEqual(/Orange.*/);

});

test.only('Screenshot', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await expect(await page.locator('input[name="username"]')).toBeVisible();
        // await expect(await page).toHaveScreenshot();

});