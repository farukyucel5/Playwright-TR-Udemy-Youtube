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

test("Multiple files upload",async({page})=>{

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  const dosyalariSecInput=page.locator("id=filesToUpload");
  await dosyalariSecInput.setInputFiles(["tests\\UploadFiles\\UploadFile1.pdf","tests\\UploadFiles\\UploadFile2.docx"]);

  let fileNames:string[];
  fileNames=["UploadFile1.pdf","UploadFile2.docx"];

  const fileArray=page.locator("//ul[@id='fileList']/li");

  for(const fileName of fileNames){
   expect(await fileArray.allTextContents()).toContain(fileName);
  }



})


test.only("Downloads",async({page})=>{

  await page.goto("https://demoqa.com/upload-download");
  // Start waiting for download before clicking. Note no await.
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link',{name:"Download"}).click();
  const download = await downloadPromise;
  // Wait for the download process to complete
  const dosyaYolu = 'C:\\Users\\faruk\\Downloads\\file3.jpeg';
  await download.saveAs(dosyaYolu);
   
  const fs = require('fs');
  
  
  expect(fs.existsSync(dosyaYolu)).toBe(true);
  




})

