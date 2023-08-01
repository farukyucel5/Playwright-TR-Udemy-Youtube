import { Page,expect} from '@playwright/test';

export default class Home{
  page:Page;

  constructor(page:Page){
    this.page=page;
  }

  async navigateToTheSite(url:string){
    await this.page.goto(url);
  }

   
  async verifyTheaccebility(url:string){
     expect(this.page.url()).toBe(url)

  }

   loginBtn=()=>this.page.locator("#login2");

   async clickOnTheLoginBtn(){
    await this.loginBtn().click();
   }



}