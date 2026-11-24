// import {test} from '@playwright/test';

// test('locate', async({page})=>{
// await page.goto('https://www.amazon.in/');
// await page.locator('#twotabsearchtextbox').fill('vivo v80');
// await page.locator('#nav-search-submit-button').click();

// })

import {test} from '@playwright/test';

test('locate', async({page})=>{
await page.goto('https://demoqa.com/text-box');

await page.locator('#userName').fill('yamuna');
await page.locator('#userEmail').fill('yame@gmail.com');
await page.locator('#currentAddress').fill('2048, prashanthnagar,Banglore');
await page.locator('#submit').click();

})