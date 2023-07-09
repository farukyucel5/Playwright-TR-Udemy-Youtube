import {test,expect} from '@playwright/test';

test.describe("Frames",()=>{

    test.beforeEach(async({page})=>{
       await page.goto("https://demoqa.com/frames");
    })

    test("Iframe1",async({page})=>{
     
      const frame1=page.frameLocator("#frame1");

      const elementText=await frame1.getByText("This is a sample page").textContent();

      expect(elementText).toBe("This is a sample page");

    })

    test("Iframe2",async({page})=>{
     
      const frame1=page.frame({url:"https://demoqa.com/sample"});

      const elementText=await frame1?.getByText("This is a sample page").textContent();

      expect(elementText).toBe("This is a sample page");

    })
     


    
  
  })