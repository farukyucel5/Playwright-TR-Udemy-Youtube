import{test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");

})

test.describe("Form elements",async()=>{

    test.skip("text box and radio button",async({page})=>{

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

    test.skip("CheckBox",async({page})=>{
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

    test.skip("Dropdowns intro",async({page})=>{
      const dropdown=page.locator("#country");

      await dropdown.selectOption("Canada");
      await dropdown.selectOption({value:"germany"});
      await dropdown.selectOption({index:5});

      const options=page.locator("#country option");

      await expect(options).toHaveCount(10);

      expect(await options.allTextContents()).toContain("China");

      const optionsArray=page.$$("#country option");

      expect(await optionsArray).toHaveLength(10);
      let status:boolean;
      status=false;
      for(const each of await optionsArray){
        let opt=await each.textContent();
        if(opt=="China"){
          status=true;
          break;

        }
      }

      expect(status).toBeTruthy();



    })

    test("Multi-select dropdowns",async({page})=>{

      const multiSelect=page.locator("#colors");
      
      await multiSelect.selectOption(["Red","Blue","Green"]);

      await expect(multiSelect).toHaveValues(["red","blue","green"]);


    })







})