import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

})

test.describe("Input box",()=>{
   
    function Xpath(text: string){
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

    })



})