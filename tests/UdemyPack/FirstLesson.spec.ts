import {test,expect} from '@playwright/test';

test('Verify that the website is accessable',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');

});