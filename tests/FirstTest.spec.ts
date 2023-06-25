import {test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
 });
 

test.describe("Home page",()=>{

   test('Verify that the website is accessable',async({page})=>{
      await expect(page).toHaveTitle('STORE');
      await expect(page).toHaveURL('https://www.demoblaze.com/');
      
   });
   


})


