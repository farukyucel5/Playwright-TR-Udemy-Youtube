import{test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    let loginLink:string;
    loginLink = "[id='login2']";//property
    // await page.locator(loginLink).click();
    await page.click(loginLink);
});

test.describe("Login",()=>{

  test('User should be able to log in the system with right credentials',async({page})=>{
    let usernameLocate : string;
    usernameLocate="#loginusername" //css
    
    // await page.locator(usernameLocate).fill("ft@gmaili.com")
    await page.fill(usernameLocate,"ft@gmaili.com");
    await page.waitForSelector(usernameLocate);
    const passwordtext = '123456';
    let passwordLocate:string;
    passwordLocate="input[id='loginpassword']" //css
    await page.locator(passwordLocate).focus();
    await page.waitForTimeout(5000);
    await page.type(passwordLocate,passwordtext);

    await page.locator("//button[text()='Log in']").focus();
    await page.waitForTimeout(5000);
    await page.click("//button[text()='Log in']");
    await page.waitForSelector("#logout2");
    await expect(page.locator("#logout2")).toBeVisible();
   
    // await page.keyboard.press("Tab");
    // await page.keyboard.insertText('123456');

})

})