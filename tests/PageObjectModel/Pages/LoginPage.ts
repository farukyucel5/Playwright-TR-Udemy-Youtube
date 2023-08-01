import{Page,expect} from '@playwright/test';

export default class Login{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }

    username= ()=>this.page.locator("#loginusername");

    async fillTheUsernameBox(username:string){
        await this.username().fill(username);
    }


    password=()=>this.page.locator("#loginpassword");

    async fillThePasswordBox(password:string){
        await this.password().fill(password);
    }

    submitBtn=()=>this.page.locator("//button[@class='btn btn-primary']").nth(2);

    async clickOnTheSubmitBtn(){
        await this.submitBtn().click();
    }

}