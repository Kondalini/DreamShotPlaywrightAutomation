const { test, expect } = require('@playwright/test');



test('validate blur effect after clicking "Get the App" button', async ({ page }) => {
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");
  await page.locator('text=Get the App').first().click();
  await page.waitForSelector('#overlay > div.framer-1w8vgtj'); 

  const overlay = await page.locator('#overlay'); 
    
  const blurElement = await page.locator('#overlay > div.framer-1w8vgtj');
  const blurEffect = await blurElement.evaluate(el => window.getComputedStyle(el).filter);




  
  console.log('Background blur effect:', blurEffect);
  
  
  
  });


