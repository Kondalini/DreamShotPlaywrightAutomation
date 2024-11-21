const { test, expect } = require('@playwright/test');

test('displays "Sign up" button color', async ({ page }) => {
 
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");
   await page.click('text=Components');
  await page.waitForURL('https://mind-wend-913065.framer.app/components');

   const signInButton = page.locator('input[type="submit"]', { hasText: 'Sign up' });
    const buttonColor = await signInButton.evaluate((element) =>
    window.getComputedStyle(element).backgroundColor
  );
    console.log('The color of the Sign In button is:', buttonColor);
  expect(buttonColor).toBe('rgb(255, 82, 79)');
});
