import { test, expect } from '@playwright/test';


test("get users",async({request})=>{
    let response;
    let responseBody;
    await test.step("Sending GET request to the API", async () => {
        response = await request.get("https://reqres.in/api/users/2");
        responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(200);
      });

    await test.step("Verifying the response is 200", async () => {
       
        expect(response.status()).toBe(200);
        
      });

    await test.step("Verifying the id inside the responseBody", async () => {
        responseBody = await response.json();
        console.log(responseBody.data.id);
        expect(responseBody.data.id).toBe(2);
        
      });  
})