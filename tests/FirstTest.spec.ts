import {test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
 }); 

test.describe("Home page",()=>{

   test('Verify that the website is accessable',async({page})=>{
      await expect(page).toHaveTitle('STORE');
      await expect(page).toHaveURL('https://www.demoblaze.com/');
      
   });

   test('Verify that all the buttons on the navbar are up and running',async({page})=>{
     await expect(page.getByText("Home ")).toBeEnabled();
     await expect(page.getByText("Cart")).toBeEnabled();
     const cartLocate= page.getByText("Cart");
     await cartLocate.click();
     await expect(page.getByText("Products")).toBeVisible();
     await page.goBack()
     
   });
   


})


