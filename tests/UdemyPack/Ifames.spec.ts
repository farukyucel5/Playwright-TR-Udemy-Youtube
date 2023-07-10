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


test.describe("Iframes Test Automation",()=>{

  test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
  })

  test("Iframe3",async({page})=>{
     
    const frame3=page.frame({url:"https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169"});
    const name:string="Faruk";
    const textField=frame3?.locator("#RESULT_TextField-0");
    await textField?.fill(name);
    expect(await textField?.inputValue()).toBe(name);

    const maleRadioBtn=frame3?.getByText("Male").nth(0);
    await maleRadioBtn?.check();
    expect(await maleRadioBtn?.isChecked()).toBeTruthy();

    let date:string;
    date="07/10/2024";

    const dateField=frame3?.locator("id=RESULT_TextField-2");
    await dateField?.fill(date);
    expect(await dateField?.inputValue()).toBe(date);


    const dropdown=frame3?.locator("id=RESULT_RadioButton-3");
    const selectedInputValue="Radio-1";
    await dropdown?.selectOption({value:selectedInputValue});
    expect(await dropdown?.inputValue()).toBe(selectedInputValue);


  })


})