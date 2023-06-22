import {test,expect} from '@playwright/test';

test('First Test',async({page})=>{
   await page.goto("https://www.demoblaze.com/");
   await expect(page).toHaveTitle('STORE');
   await expect(page).toHaveURL('https://www.demoblaze.com/');

});