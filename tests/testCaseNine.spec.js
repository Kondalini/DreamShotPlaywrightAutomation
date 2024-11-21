const { test, expect } = require('@playwright/test');

test.only('Sign Up functionality', async ({ page }) => {
 
  await page.goto('https://mind-wend-913065.framer.app');
  console.log(await page.title());
  await expect(page).toHaveTitle("3D Framer Site");
  await page.waitForTimeout(3000);
  page.click("#main > div > div.framer-y2vcw2 > div.framer-1xcigqf-container > div > div > div > div.framer-1ghzv5z-container > div > div > div > p > span")
  await page.waitForTimeout(3000); 
  page.fill('input[placeholder="Email"]', "alex_kr@abv.bg")
        page.fill("input[placeholder='Password']", "password123")
        page.click("text='Sign up'")
        expect(page).text_content("div.confirmation") == "Registration successful"

  
});

