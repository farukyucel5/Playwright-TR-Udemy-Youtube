import { test as base } from '@playwright/test';
import Home from '../Pages/Homepage';
import LoggedIn from '../Pages/LoggedInPage';
import Login from '../Pages/LoginPage'

// Declare the types of your fixtures.
type MyFixtures = {
  home:Home,
  loggedIn:LoggedIn,
  login:Login
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
   home: async ({ page }, use) => {
    await use(new Home(page));
  },

  loggedIn: async ({ page }, use) => {
    await use(new LoggedIn(page));
  },

  login:async({page},use)=>{
    await use(new Login(page));
  }
});
export { expect } from '@playwright/test';