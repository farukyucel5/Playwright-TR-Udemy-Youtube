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

  const pageTwo=await context.newPage();
  await pageTwo.goto("https://testautomationpractice.blogspot.com/")
  const copyButton=page.locator("//button[normalize-space()='Copy Text']");
  await copyButton.waitFor({state:'visible'});
  
  await copyButton.dblclick();

  const coppiedTextBtn=page.locator("#field2");
  await expect(coppiedTextBtn).toHaveValue("Hello World!");



  

})

test("Right click actions1",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  const copyButton=page.locator("//button[normalize-space()='Copy Text']");
  await copyButton.waitFor({state:'visible'});
  
  await copyButton.dblclick();

  const coppiedTextBtn=page.locator("#field2");
  await expect(coppiedTextBtn).toHaveValue("Hello World!");

})

 




})