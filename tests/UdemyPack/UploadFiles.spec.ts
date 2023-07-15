import{test,expect} from '@playwright/test';

test("Upload files",async({page,context})=>{
    
    await page.goto("https://demoqa.com/upload-download");

    const uploadInput=page.locator("id=uploadFile");

    await uploadInput.setInputFiles("tests\\UploadFiles\\UploadFile1.pdf");

    const uploadFilesField=page.locator("id=uploadedFilePath");
    expect(await uploadFilesField.textContent()).toContain("UploadFile1.pdf");


    const pageTwo=await context.newPage();

    await pageTwo.goto("https://www.foundit.in/");
    const uploadFileInput=pageTwo.locator("//*[@*='heroSection-buttonContainer_secondaryBtn__imgHolder']");
    await uploadFileInput.click();
    const fileUploadInput=pageTwo.locator("id=file-upload");
    await fileUploadInput.setInputFiles("tests\\UploadFiles\\UploadFile2.docx");

    const submitBtn=pageTwo.locator("id=pop_upload");
    await submitBtn.click();

    const pageTwoUploadFileInput=pageTwo.locator("//*[@*='f15']");
    expect(await pageTwoUploadFileInput.textContent()).toContain("UploadFile2.docx");




})