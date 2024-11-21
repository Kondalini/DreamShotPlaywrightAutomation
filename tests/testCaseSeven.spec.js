const { test, expect } = require('@playwright/test');



test('displays "Get the app" and "Watch video" buttons one above the other on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");

  
   const getAppButton = await page.locator('text=Get the app').first();
  const watchVideoButton = await page.locator('text=Watch video');

  
  await expect(getAppButton).toBeVisible();
  await expect(watchVideoButton).toBeVisible();

 
  const getAppPosition = await getAppButton.boundingBox();
  const watchVideoPosition = await watchVideoButton.boundingBox();

  expect(getAppPosition.y).toBeLessThan(watchVideoPosition.y);
  });


