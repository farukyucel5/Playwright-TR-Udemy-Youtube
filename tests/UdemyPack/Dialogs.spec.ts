import{test,expect}  from '@playwright/test';


test.describe("Dialogs",()=>{

  test.beforeEach(async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");

  })

  test("Alert",async({page})=>{
    
    page.on("dialog",dialog=>{
       expect(dialog.type()).toBe("alert");
       expect(dialog.message()).toBe("I am an alert box!");
      dialog.accept()

    })

    await page.click("//button[text()='Alert']");

  })


  test("Confirm box",async({page})=>{
    
    page.on("dialog",dialog=>{
       expect(dialog.type()).toBe("confirm");
       expect(dialog.message()).toBe("Press a button!");
      //dialog.accept();
      dialog.dismiss();

    })

    await page.getByText("Confirm Box").click();
    const resultText=page.locator("#demo");

    expect(await resultText.textContent()).toBe("You pressed Cancel!");

  })

  test("Prompt",async({page})=>{
    let promptValue:string;
    promptValue="Faruk";
    page.on("dialog",dialog=>{
       expect(dialog.type()).toBe("prompt");
       expect(dialog.message()).toBe("Please enter your name:");
       expect(dialog.defaultValue()).toBe("Harry Potter");
       dialog.accept(promptValue)
     // dialog.dismiss();

    })

    await page.getByText("Prompt").click();
    const resultText=page.locator("#demo");

    expect(await resultText.textContent()).toBe(`Hello ${promptValue}! How are you today?`);

  })


  test("Prompt dismiss",async({page})=>{
    let promptValue:string;
    promptValue="Faruk";
    page.on("dialog",dialog=>{
       expect(dialog.type()).toBe("prompt");
       expect(dialog.message()).toBe("Please enter your name:");
       expect(dialog.defaultValue()).toBe("Harry Potter");
       //dialog.accept(promptValue)
       dialog.dismiss();

    })

    await page.getByText("Prompt").click();
    const resultText=page.locator("#demo");

    expect(await resultText.textContent()).toBe("User cancelled the prompt.");

  })




})