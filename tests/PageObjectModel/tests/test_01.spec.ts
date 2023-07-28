import{ test } from '@playwright/test';
import Home from '../Pages/Homepage';
import * as data from '..\\TestData\\data.json';

test("Page accecibility test",async({page,baseURL})=>{
   const home =new Home(page);

  await home.navigateToTheSite(`${baseURL}`);
  await home.verifyTheaccebility(data.url);

})