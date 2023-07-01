import{test,expect} from '@playwright/test';

test.describe("Assertions",async()=>{

    test("Hard assertions",async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await expect(page).toHaveURL("https://www.demoblaze.com/");
        await expect(page).toHaveTitle("STORE");
        await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();
     //    await expect(page.getByText("Place Order").nth(1)).toBeAttached();
     
     })

     test("Automation practice",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const checkBoxLocate=page.locator("//input[@id='male']");
        await checkBoxLocate.check();
        await expect(checkBoxLocate).toBeChecked();
        await expect(page.locator("//input[@id='name']")).toBeEnabled();
        // await expect(page.locator("//input[@id='name']")).toBeDisabled();
        await expect(page.locator("//input[@id='name']")).toBeEditable();

     })

})
