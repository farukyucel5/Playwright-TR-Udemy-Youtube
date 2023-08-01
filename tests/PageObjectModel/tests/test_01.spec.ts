import{ test } from '@playwright/test';
import Home from '../Pages/Homepage';
import * as data from '..\\TestData\\data.json';
import LoggedIn from '../Pages/LoggedInPage';
import Login from '../Pages/LoginPage';

test.beforeEach(async({page,baseURL})=>{
  const home =new Home(page);

  await home.navigateToTheSite(`${baseURL}`);
})

test("Page accecibility test",async({page,baseURL})=>{
  const home =new Home(page);
  await home.verifyTheaccebility(data.url);

})

test.only("Login test with right credentials",async({page})=>{
  const home =new Home(page);
  const login=new Login(page);
  const loggedIn=new LoggedIn(page)

  await home.clickOnTheLoginBtn();
  await login.fillTheUsernameBox(data.username);
  await login.fillThePasswordBox(data.password);
  await login.clickOnTheSubmitBtn();
  await loggedIn.verifyTheLogin();


})