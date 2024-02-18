import {test,expect, APIResponse} from '@playwright/test'


test("get users list",async({request})=>{
    let response:APIResponse;
    await test.step("get the user list",async()=>{

          response= await request.get("https://reqres.in/api/users?page=2");
          const responseBody=await response.json();
          console.log(responseBody);
          let dataLength=responseBody.data.length;
          console.log(dataLength);
          expect(response.status()).toBe(200);
    
    })



})