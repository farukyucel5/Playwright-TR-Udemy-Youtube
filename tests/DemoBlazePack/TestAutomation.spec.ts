import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

})

test.describe("Input box",()=>{
   
    function Xpath(text: string):string{
        return`//input[@id='${text}']`
    }

    test("Input Box",async({page})=>{
        
        await page.focus(Xpath("name"));
        await expect(page.locator(Xpath("name"))).toBeFocused();
        await page.fill(Xpath("name"),"Faruk");
        await expect(page.locator(Xpath("name"))).toHaveValue("Faruk");

        await page.focus(Xpath("email"));
        await expect(page.locator(Xpath("email"))).toBeFocused();
        await page.fill(Xpath("email"),"farukyucel@gmail.com");
        await expect(page.locator(Xpath("email"))).toHaveValue("farukyucel@gmail.com");
        
        await page.focus(Xpath("phone"));
        await expect(page.locator(Xpath("phone"))).toBeFocused();
        await page.fill(Xpath("phone"),"123456");
        await expect(page.locator(Xpath("phone"))).toHaveValue("123456");

        await page.getByText("Sunday").focus();
        await page.waitForTimeout(3000);
        await expect(page.locator("id=sunday")).toBeFocused();
        await page.getByText("Sunday").check();
        await page.getByText("Monday").check();
        await page.getByText("Tuesday").check();

        expect(0.1 + 0.2).not.toBe(0.3);
        expect(0.1 + 0.2).toBeCloseTo(0.3);


    })



})