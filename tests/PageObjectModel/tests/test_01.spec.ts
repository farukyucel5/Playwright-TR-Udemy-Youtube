import{ test } from '../Fixtures/Fixtures';
import * as data from '..\\TestData\\data.json';

test.beforeEach(async({page,baseURL,home})=>{
 await home.navigateToTheSite(`${baseURL}`);
})

test("Page accecibility test",async({page,baseURL,home})=>{
  await home.verifyTheaccebility(data.url);

})

test("Login test with right credentials",async({page,home,loggedIn,login})=>{
  await home.clickOnTheLoginBtn();
  await login.fillTheUsernameBox(data.username);
  await login.fillThePasswordBox(data.password);
  await login.clickOnTheSubmitBtn();
  await loggedIn.verifyTheLogin();


})