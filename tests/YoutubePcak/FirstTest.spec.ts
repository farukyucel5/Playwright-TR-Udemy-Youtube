import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.demoblaze.com/');

})

test.describe("Ders1",()=>{
    test('Verify that the website is accessable',async({page})=>{
        await expect(page).toHaveTitle('STORE');
        await expect(page).toHaveURL('https://www.demoblaze.com/');
    
    });

    test('Verify that user is able to log in the system with right credentials',async({page})=>{
       await page.click("//a[text()='Log in']")
    //    await page.locator("//a[text()='Log in']").click();
       await page.fill("#loginusername","ft@gmaili.com");

       await page.locator("[id='loginpassword']").fill("123456");


       await page.locator("button[class='btn btn-primary']").nth(2).click();
       await page.waitForSelector("//a[@id='logout2']")
       await expect(page.locator("//a[@id='logout2']")).toBeVisible();

   })
    

})


