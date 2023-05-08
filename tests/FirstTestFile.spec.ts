import { test, expect } from '@playwright/test';

test('first search test',async({page})=>{
    await page.goto("https://www.etsy.com/")
    await page.getByPlaceholder("Search for anything").fill("pillows")
    await page.locator("xpath=//span[@class='wt-icon wt-nudge-b-2 wt-nudge-r-1']").click()
    const locate=page.locator("xpath=//span[@class='wt-display-inline-flex-sm']")
    await expect(locate).toContainText("results")
})