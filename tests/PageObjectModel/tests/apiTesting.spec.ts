import { test, expect } from '@playwright/test';


test("get users",async({request})=>{
    let response;
    await test.step("Sending GET request to the API", async () => {
        response = await request.get("https://postman-echo.com/get?foo1=bar1&foo2=bar2");
        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(200);
      });

    await test.step("Verifying the response is 200", async () => {
       
        expect(response.status()).toBe(200);
      });
})