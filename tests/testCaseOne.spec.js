const { test, expect } = require('@playwright/test');

test('display products\' currency symbol as $ in the Pricing page', async ({ page }) => {
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");

  await page.click('text=Pricing');
  
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL('https://mind-wend-913065.framer.app/pricing')

  const pricingContainer = await page.locator('.pricing-container');
  await expect(pricingContainer).toBeVisible();


  const plans = await pricingContainer.locator(':scope > *');
  const planCount = await plans.count();
  expect(planCount).toBe(3);

  for (let i = 0; i < planCount; i++) {
    const planText = await plans.nth(i).textContent();
    console.log(`Plan ${i + 1} Text:`, planText);
    expect(planText).toContain('$');
  }
});



