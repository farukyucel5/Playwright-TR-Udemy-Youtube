import{test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");

})

test.describe("Form elements",async()=>{

    test("text box and radio button",async({page})=>{

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

    test("CheckBox",async({page})=>{
    //   const day1=page.getByText("Sunday");
    //   const day2=page.getByText("Monday");
    //   const day3=page.getByText("Tuesday");

    //   await day1.check();
    //   await expect(day1).toBeChecked();
    //   await day2.check();
    //   await expect(day2).toBeChecked();
    //   await day3.check();
    //   await expect(day3).toBeChecked();

      const checkArray=[page.getByText("Sunday"),page.getByText("Monday"),page.getByText("Tuesday")]

      for(const each of checkArray){
        await each.check();
        await expect(each).toBeChecked();
      }



     

    })


})