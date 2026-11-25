import {test} from "@playwright/test";

test('Handle alerts', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async (Dialog)=> {
    console.log(Dialog.message());
    console.log(Dialog.type());
    // Dialog.accept();

    if(Dialog.type() === 'alert'){
      Dialog.accept()
    }
    else if(Dialog.type() === 'confirm'){
      Dialog.dismiss()
    }
    else if(Dialog.type() === 'prompt'){
      Dialog.accept("Yamuna")
    }

  })
 await page.locator("#alertButton").click();
 await page.locator("#confirmButton").click();
 await page.locator("#promtButton").click();
});