import { Page ,expect} from '@playwright/test';

export default class FormPageClass{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }


    nameField = () => this.page.locator("#name");

    async fillingTheName(name:string){
      
        await this.nameField().fill(name);
    }


    async verifyTheNameHasBeenPassed(name:string){

        await expect(this.nameField()).toHaveValue(name);
    }

    async navigateToTheWebPage(url:string){
        await this.page.goto(url);
    }


   



}