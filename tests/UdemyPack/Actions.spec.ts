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

 test("Right click actions",async({page})=>{
   await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  const rightClickElement=page.getByText("right click me");
  await rightClickElement.click();//normal mouse click

  await rightClickElement.click({button:"right"});//sağ click
  
  const rightClickMenu=page.locator("//ul[@class='context-menu-list context-menu-root']");
  await expect(rightClickMenu).toBeVisible();

 })



})