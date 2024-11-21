const { test, expect } = require('@playwright/test');



test('displays the "Updated" page after clicking the "Update" button', async ({ page }) => {
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");

  const updateButton = page.locator('//*[contains(text(), "Updates")]')

     await updateButton.first().click();
     await page.waitForTimeout(5000);
      await expect(page).toHaveURL('https://mind-wend-913065.framer.app/updates');

});


