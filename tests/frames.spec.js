import {test} from "@playwright/test";

test('Handle frames', async ({ page})=>{
await page.goto('https://practice-automation.com/iframes/');
const frame1 =  page.frameLocator("#iframe-1");
await frame1.locator("//a[text()= 'MCP']").click();

const frame2 = page.frameLocator("#iframe-2");
await frame2.locator("//span[text()= 'Documentation']").click();
await frame2.locator("//span[@class='td-sidebar-nav-active-item']").click();

})