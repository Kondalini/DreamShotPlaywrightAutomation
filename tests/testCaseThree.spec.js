const { test, expect } = require('@playwright/test');

test('Validating displaynig Visit button on each card in the "Many types of components to customize', async ({ page }) => {
    await page.goto('https://mind-wend-913065.framer.app');
    console.log(await page.title());
    await expect(page).toHaveTitle("3D Framer Site");
  
    await page.click('text=Components');
    
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://mind-wend-913065.framer.app/components')
    await page.locator('text=Many types of components to customize').scrollIntoViewIfNeeded();

    const componentsContainer = await page.locator('.components-container');
    await expect(componentsContainer).toBeVisible();

  const cards = await componentsContainer.locator('div[data-framer-name="Card"]');

  const cardsCount = await cards.count();

  for( let i=0;i<cardsCount;i++){
   const visitButton = await cards.nth(i).locator('text=Visit');
   await expect(visitButton).tobeVisible();


  }

});