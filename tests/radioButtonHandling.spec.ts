import {test, expect} from '@playwright/test'

//npx playwright test tests/HandlingButton.spec.ts  --project=chromium --headed 

test('Radio button handling', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');
    
    await maleRadioButton.check();
    //Way 1
    expect(await maleRadioButton.isChecked()).toBeTruthy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await femaleRadioButton.check();
    //Way 2
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).toBeChecked();

});