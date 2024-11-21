const { test, expect } = require('@playwright/test');
test('Validating 4 numbers in FAQ section', async ({ page }) => {
    await page.goto('https://mind-wend-913065.framer.app');
    console.log(await page.title());
    await expect(page).toHaveTitle("3D Framer Site");
  
    await page.click('text=Pricing');
    
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://mind-wend-913065.framer.app/pricing')

    const faqQuestions = await page.locator('.faq-question'); 
    expect(await faqQuestions.count()).toBe(4);


});