import{test,expect} from '@playwright/test';

test.describe("Actions",()=>{

 test.skip("Hover actions",async({page})=>{
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

test("Double click actions and multi context running",async({page,context})=>{
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

  page.on('dialog',dialog=>{
    
    expect(dialog.message()).toBe("You double clicked me.. Thank You..")
    dialog.accept();

  })

  const doubleClickElement=page.getByText("Double-Click Me To See Alert");
  await doubleClickElement.dblclick();


  const pageTwo=await context.newPage();
  await pageTwo.goto("https://testautomationpractice.blogspot.com/");
  const copyTextBtn=pageTwo.getByText("Copy Text");

  await copyTextBtn.dblclick();
  const coppiedTextBox=pageTwo.locator("#field2");
  expect(await coppiedTextBox.inputValue()).toBe("Hello World!");
  //await expect(coppiedTextBox).toHaveValue("Hello World!");


})






 




})