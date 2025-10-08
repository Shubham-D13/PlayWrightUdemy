import {test,expect} from '@playwright/test'
//import functions, objects, or other modules into the current file. It helps you to organize and reuse code.

//{ test, expect }: This is called destructuring assignment. You're importing two specific functions (test and expect) from the @playwright/test package.

//test: A function provided by Playwright, which is a testing framework. This function is used to define and run a test.

/*expect: This is an assertion library function. 
 It's used to validate or check the outcome of some operations or behaviors in your tests.
  It will compare the actual result against the expected result.*/

test('Google Test', async ({page}) =>{
    /*
       test() is the function used to define a test case. It takes two arguments:

      'Google Test': This is a string that describes the name of the test. In this case, it's named "Google Test." This name is used for identification and reporting purposes.
      async ({ page }) => {...}: This is an asynchronous arrow function that contains the actual test steps. The test is defined inside this function.
      async: This keyword indicates that the function is asynchronous. This means it will perform operations that may take time (like waiting for a page to load), 
              and the test framework will wait for the actions to complete before moving on.
    ({ page }): This is destructuring. The page object is passed as part of the test context by Playwright. The page object represents a browser page (like a tab in Chrome). 
      You'll use it to interact with the page (e.g., navigating to URLs, clicking elements, etc.).
    */
 
 // await it will wait for action to be perfrom
 await page.goto("https://www.google.com/")

 /*
 await: This tells the function to wait until the operation is complete before moving to the next line of code. 
 This is important because browser actions (like loading a page) take time, and await ensures that the script waits for the page to load before continuing with the next actions.
page.goto("https://www.google.com/"): 
                    page.goto(): This is a Playwright function that navigates to a given URL in the browser.
                    "https://www.google.com/": This is the URL you want to navigate to, which in this case is Google's homepage.
*/

 expect(await page.title()).toEqual("Google")
 
 /*
 expect(): This function is used to make assertions or checks. You're saying that you expect something to happen or behave in a certain way.
page.title(): This function gets the title of the current page. It fetches the <title> tag content from the page, which is typically what is displayed in the browser tab.
toEqual("Google"): This is an assertion method. It compares the result of page.title() to the string "Google".*/
})

