import { test }  from "..\\Fixtures\\basePage"
import * as data from "..\\TestData\\data.json";

    test("text box and radio button",async({formPageClass,baseURL})=>{
        await formPageClass.navigateToTheWebPage(`${baseURL}`);
        await formPageClass.fillingTheName(data.name);
        await formPageClass.verifyTheNameHasBeenPassed(data.name);

    })