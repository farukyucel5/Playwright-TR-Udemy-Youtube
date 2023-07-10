import {test,expect} from '@playwright/test';

test.describe("Handling windows",()=>{

   test("New tab",async({page,context})=>{
     await page.goto("https://demoqa.com/browser-windows");
     const pagePromise=context.waitForEvent('page');
     await page.getByText("New Tab").click();
     const newPage=await pagePromise;
     await newPage.waitForLoadState();
     console.log(newPage.url());
     expect(newPage.url()).toBe("https://demoqa.com/sample");

     const allPages=context.pages();

    //  for(const page of allPages){
    //     const pageUrl=page.url();
    //     console.log(`The current page url ${pageUrl}`);
    //     await page.bringToFront();
    //     await page.waitForTimeout(3000);


    //  }

    for(const page of allPages){
        const pageUrl=page.url();
        
        if(pageUrl!=="https://demoqa.com/browser-windows"){
            //await page.bringToFront();
            const elementText= await page.getByText("This is a sample page").textContent();
            expect(elementText).toBe("This is a sample page");
            await page.close();

        } 

     }
     await page.close();

 
    //oluşturulan yeni page nesnesi ismi ile sayfada işlem yapılabilir.
    // const elementText= await newPage.getByText("This is a sample page").textContent();
    // expect(elementText).toBe("This is a sample page");


    // for(const page of allPages){
    //     const pageUrl=page.url();
        
    //     if(pageUrl!=="https://demoqa.com/browser-windows"){
    //         await page.bringToFront();
    //         const elementText= await page.getByText("This is a sample page").textContent();
    //         expect(elementText).toBe("This is a sample page");
    //         await page.close();
    //     }  

    //  }

    //  const browserWin=page.getByText("Browser Windows").nth(0);
    //  await expect(browserWin).toBeVisible();




   })




})
