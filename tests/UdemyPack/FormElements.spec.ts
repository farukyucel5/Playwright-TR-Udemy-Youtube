import{test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");

})

test.describe("Form elements",async()=>{

    test("text box",async({page})=>{

        const nameField=page.locator("#name");
        const genderRadioButton=page.locator("#male");
        const genderRadioButton2=page.getByText("Female");

        await nameField.fill("Faruk");
        await expect(nameField).toHaveValue("Faruk");

        await genderRadioButton.check();
        await expect(genderRadioButton).toBeChecked();

        await genderRadioButton2.check();
        await expect(genderRadioButton2).toBeChecked();




    })
})