import { test as base } from '@playwright/test';

import FormPageClass from '../Pages/Formpage';


type Myfixture={
  formPageClass:FormPageClass;
}
// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<Myfixture>({
  // Define a fixture. Note that it can use built-in fixture "page"
  formPageClass: async ({ page }, use) => {
    await use(new FormPageClass(page));
  }
});