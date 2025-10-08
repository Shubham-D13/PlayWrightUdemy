import {test, expect} from '@playwright/test'

//npx playwright test tests/HandlingButton.spec.ts  --project=chromium --headed 

test('CheckBox button handling', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    await cricketCheckbox.check();
    await moviesCheckbox.check();
    // await hockeyCheckbox.check();

    await expect(cricketCheckbox).toBeChecked();
    expect(await moviesCheckbox.isChecked()).toBeTruthy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();




});