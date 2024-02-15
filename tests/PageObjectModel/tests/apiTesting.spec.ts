import { test, expect } from '@playwright/test';


test("get users",async({request})=>{

    await test.step("Sending GET request to the API", async () => {
        const response = await request.get("https://reqres.in/api/users?page=2");
        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(200);
      });
})