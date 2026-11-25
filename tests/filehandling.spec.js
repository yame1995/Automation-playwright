import {test} from '@playwright/test';

test('uploadFile', async({page})=>{
await page.goto('https://uploadnow.io/');
await page.locator('input[type="file"]').setInputFiles([
    'E:\\document\\Demo Website test cases.docx',
    'E:\\document\\IMG_3912.jpg'
]);
await page.waitForTimeout(7000);

})
