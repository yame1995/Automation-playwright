import {test} from '@playwright/test';

test ('singleDropdown', async({page})=>{

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.locator('//button[@data-target="simple-dropdown"]').click();
    await page.locator('#simple-dropdown select').selectOption('option2');
})

test ('styledDropdown', async({page})=>{

    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByText('Styled Dropdown').first().click();
    await page.locator('#styled-dropdown select').selectOption('option3');

})

test ('multiDropdown', async({page})=>{
     await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
     await page.getByRole('button', { name: 'Multi-Select'}).click();
     await page.locator('#multi-select-dropdown select').selectOption(['option1','option2','option3']);
     


})















// test('dropdown handling', async({page})=>{
// await page.goto('https://www.amazon.in/');
// // await page.locator('//select[@title="Search in"]').selectOption({value:"search-alias=todays-deals"});
// await page.locator('//select[@title="Search in"]').selectOption({value:"search-alias=videogames"});


// })