import{test,expect} from '@playwright/test';

test.describe("Actions",()=>{

 test("Hover actions",async({page})=>{
   await page.goto("https://www.amazon.com/");
   const helloSignInLink=page.locator("#nav-link-accountList");
   await page.waitForSelector("#nav-link-accountList");
   await helloSignInLink.hover();
   await page.waitForTimeout(3000);
   const accountLink=page.locator("//span[text()='Account']");
   await accountLink.hover();

 })

 test("Right click actions",async({page,context})=>{
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  const rightClickElement=page.getByText("right click me");
  await rightClickElement.click()//normal click yapar

  await rightClickElement.click({button:'right'})//sağ click yapar

  const rightClickMenu=page.locator("//ul[@class='context-menu-list context-menu-root']");

  await expect(rightClickMenu).toBeVisible();
})

test.only("Double click",async({page,context})=>{ 
  await page.goto("https://demoqa.com/buttons");
  const dbClickBtn=page.getByText("Double Click Me");
  await dbClickBtn.dblclick();
  const expectedTextElement=page.locator("id=doubleClickMessage");
  expect(await expectedTextElement.textContent()).toBe("You have done a double click");

  const pageTwo=await context.newPage();
  await pageTwo.goto("https://testautomationpractice.blogspot.com/");
  await pageTwo.evaluate(() => {
    window.scrollTo(0, 200);
  });
  
  const coppyTextBtn=pageTwo.getByText("Copy Text");
  await coppyTextBtn.dblclick();

  const coppiedTextBox=pageTwo.locator("#field2");
  expect(await coppiedTextBox.inputValue()).toBe("Hello World!");
  //await expect(coppiedTextBox).toHaveValue("Hello World!")

})


test("Drag and Drop",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const sourceElement=page.getByText("Drag me to my target");
   const tagetElement=page.locator("#droppable");

   await sourceElement.dragTo(tagetElement);

   const droppedText:string|null=await page.locator("#droppable p").textContent();

   expect(droppedText).toBe("Dropped!");

})



 




})