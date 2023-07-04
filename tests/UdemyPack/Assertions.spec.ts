import{test,expect} from '@playwright/test';

test.describe("Assertions",async()=>{

    test.skip("Hard assertions",async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await expect(page).toHaveURL("https://www.demoblaze.com/");
        await expect(page).toHaveTitle("STORE");
        await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();
     //    await expect(page.getByText("Place Order").nth(1)).toBeAttached();
  })

     test.skip("Automation practice",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const checkBoxLocate=page.locator("//input[@id='male']");
        await checkBoxLocate.check();
        await expect(checkBoxLocate).toBeChecked();
        await expect(page.locator("//input[@id='name']")).toBeEnabled();
        // await expect(page.locator("//input[@id='name']")).toBeDisabled();
        await expect(page.locator("//input[@id='name']")).toBeEditable();
        await expect(page.locator("//input[@id='name']")).toBeEmpty();
        await page.locator("//input[@id='name']").fill("Faruk");
        await expect(page.locator("//input[@id='name']")).toHaveValue("Faruk");
        await expect(page.locator("//input[@id='name']")).not.toBeEmpty();
      //   await expect(page.locator("//input[@id='name']")).toBeEmpty();


     })

     test.skip("DemoQA",async({page})=>{
      await page.goto("https://demoqa.com/")
      await expect(page.getByText("Book Store Application")).not.toBeInViewport();
      // await expect(page.getByText("Book Store Application")).toBeInViewport();
      await expect(page.getByText("Book Store Application")).toContainText("Application");
      await expect(page.getByText("Book Store Application")).toContainText(" Application");
      await expect(page.getByText("Book Store Application")).toContainText("ion");
      await expect(page.getByText("Book Store Application")).toHaveText("Book Store Application");
      // await expect(page.getByText("Book Store Application")).toHaveText(" Book Store Application"); //hata verecek
      // await expect(page.getByText("Book Store Application")).toHaveText("Store Application"); // hata verecek
      
     expect(await page.getByText("Book Store Application").textContent()).toBe("Book Store Application");

})


test("Generic assertions",async({page})=>{

   // let value1=3;
   // let valu2=3;

   // expect(value1).toBe(3);

   // let str1="string";
   // let str2="string";

   // expect(str1).toBe(str2);

   // // expect(0.1+0.2).toBe(0.3);
   // expect(0.1+0.2).toBeCloseTo(0.3);

   // const obj1={
   //    prop:2
   // };

   // const obj2={
   //    prop:2
   // }

   // expect(obj1).toEqual(obj2);
   // expect(obj1.prop).toBe(obj2.prop);
   // expect(obj1).toBe(obj2);

   // let str3:string;
   // str3="Hello world";

   // expect(str3).toContain("world");
   // expect(str3).toContain("wor");
   // expect(str3).toContain("ld");

   // const arr1=[1,2,3,4,5,6];

   // expect(arr1).toContain(2);

   // const arr2=[{prop1:1},{prop2:2},{prop3:3}]

   // expect(arr2).toContainEqual({prop1:1});
   // expect(arr2).toContain({prop1:1});//failed

   let str1:string;
   str1="Hello world";

   expect(str1).toHaveLength(11);

   const array=[1,2,3,4,5,6,7,8,9];

   expect(array).toHaveLength(9);

   let status=false;

   expect(status).toBeFalsy();
   expect(status).toBeTruthy();

})

   


})
