import {test,expect} from '@playwright/test';

test.describe("Handling windows",()=>{

    test.beforeEach(async({page})=>{
      await page.goto("https://demoqa.com/browser-windows");
    })

   test.skip("New Tab",async({page})=>{
    const newTabBtn=page.getByText("New Tab");
    await newTabBtn.click();

    const newTabText=page.getByText("This is a sample page");
    await expect(newTabText).toBeVisible(); //hatalı kod ! page nesnesi ile yeni açılan tabde işlem yapılamaz
    
   })

   test.skip("New Tab with context",async({page,context})=>{
    const newTabBtn=page.getByText("New Tab");
    
     
    const pagePromise=context.waitForEvent('page');
    await newTabBtn.click();
    const newPage=await pagePromise;
    
    await newPage.waitForLoadState();

    const newTabText=newPage.getByText("This is a sample page");
    await expect(newTabText).toBeVisible();
    
    await page.bringToFront()
    await page.waitForTimeout(3000);
    await page.getByText("Elements").click();

    await newPage.bringToFront();
    expect(newPage.url()).toBe("https://demoqa.com/sample");

})


test("New Tab with for loop",async({page,context})=>{
    const newTabBtn=page.getByText("New Tab");
    
     
    const pagePromise=context.waitForEvent('page');
    await newTabBtn.click();
    const newPage=await pagePromise;
    await newPage.waitForLoadState();

    const allPages=context.pages();

    for(const eachPage of allPages){

        const eachPageUrl=eachPage.url();
        console.log(`each page url:${eachPageUrl}`);
    }

   


})







})
