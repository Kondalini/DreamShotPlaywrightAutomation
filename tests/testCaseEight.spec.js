const { test, expect } = require('@playwright/test');

test('Reveal and click the "Click to view in 3D" button, then verify animation', async ({ page }) => {
 
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");

  
  const hoverTarget = page.locator('//*[@id="main"]/div/div[1]/div[2]/div[2]/div[2]/h1/span');
  await hoverTarget.hover(); 

  
  const button = page.locator('[data-projection-id="179"]');
  await expect(button).toBeVisible();e
  await button.click(); 

  
  const animation = page.locator('.three-d-animation');
  await expect(animation).toBeVisible(); 
});

