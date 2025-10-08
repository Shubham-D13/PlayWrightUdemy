// Syntax for CSS ---> tagName[attribute="Value"]  ==> input[id="user-name"]
// Syntax for Xpath - --> //tagName[@attribute="Value"] ==> //input[@id="user-name"]

//Syntax for ID Attribute in CSS ---> #value ==> #user-name
//Syntax for Class Attribute in CSS -->.value ==>.user-name

import {test, expect } from '@playwright/test';

test('Locator Strategy', async ({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('//input[@data-test="login-button"]').click();
    await page.pause();
});

// Syntax 
// var variableName = variableValue

var myName = "Vignesh";
let myAge = 35;
const myGender = "Male";

console.log("My name is" +myName+ "and my age is "+myAge+" and I am of Gender "+myGender);

// var and let values can be changed
// Const values cannot be changed