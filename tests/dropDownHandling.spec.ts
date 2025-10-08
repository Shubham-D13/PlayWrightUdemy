import {test, expect} from '@playwright/test'

//npx playwright test tests/HandlingButton.spec.ts  --project=chromium --headed 

test.only('Single static Dropdown Handing', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills', {
        value: 'Art Design'
    });
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills', {
        label: 'Backup Management'
    });
    
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills', {
        index:4
    });
    await page.waitForTimeout(3000);

});

test('Multi static Dropdown Handing', async({page}) =>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    await page.selectOption('#multi-select', [
        {value:'California'},
        {value:'New Jersey'},
        {value:'Washington'}
    ])
});

test('Searchable Dynamic Dropdown', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');

});

test('Non searchable Dynamic Dropdown', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html');

});