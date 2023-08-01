import{Page,expect} from '@playwright/test';

export default class LoggedIn{

 page:Page;

 constructor(page:Page){
    this.page=page;
 }


 loggedOutBtn=()=>this.page.getByText("Log out");

 async verifyTheLogin(){
    
    await expect(this.loggedOutBtn()).toBeVisible();
 }



}