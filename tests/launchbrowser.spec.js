import{test, chromium} from '@playwright/test';

test ('Launch browser', async()=>{
const browser = await chromium.launch();
const context = await browser.newContext({
    recordVideo:{dir:'./video'}
});                
const page2 = await context.newPage();

const page3 = await context.newPage();

await page2.goto('https://www.makemytrip.com/');
await page2.goto('https://www.amazon.com/');

})

