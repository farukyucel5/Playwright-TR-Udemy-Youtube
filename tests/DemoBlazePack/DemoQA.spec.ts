import {test,expect} from '@playwright/test';


test('to be in viewport',async({page})=>{
 await page.goto('https://demoqa.com/');
 await expect(page.getByText("Book Store Application")).toBeVisible();
 await page.getByText("Book Store Application").click();
 await page.goBack();
 await expect(page.getByText("Book Store Application")).toBeInViewport();
      
})
test('to be in viewport amazon',async({page})=>{
    await page.goto('https://www.amazon.com/');
    await expect(page.locator("//*[@class='navFooterBackToTopText']")).not.toBeInViewport();
         
})
