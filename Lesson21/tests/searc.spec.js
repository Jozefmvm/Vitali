const { test, expect } = require('@playwright/test');

const { SearchComponents } = require('../pageobjects/pagecomponents/searchComponents')

const searchcomponents = new SearchComponents();


test.describe('Check searh components', () => {

    test.beforeEach(async ({ page }) => {
  
      await page.goto('https://playwright.dev/');
    });


    test ('Check serch field by CSS', async({ page }) => {
        const searchField =  page.locator(searchcomponents.searchButtonFull);
        await expect(searchField).toHaveCSS('display', 'flex');
    })


    test ('Check text in serch field', async({ page }) => {
      const searchField =  page.locator(searchcomponents.searchButton);
      await expect(searchField).toHaveText('Search')
  })


    test ('Check serching function on site after input word (Videos)', async({ page }) => {
        const searchField =  page.locator(searchcomponents.searchButton);
        await searchField.click();
        await page.locator(searchcomponents.inputField).fill(searchcomponents.wordForCheck);
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        const headerVideos = page.locator(searchcomponents.headerAfterSearch);
        await expect(headerVideos).toHaveText(searchcomponents.wordForCheck);
    
  })

     test ('Check serching function on site after input word (Waite)', async({ page }) => {
        const searchField =  page.locator(searchcomponents.searchButton);
        await searchField.click();
        await page.locator(searchcomponents.inputField).fill(searchcomponents.secondWord);
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        const headerVideos = page.locator(searchcomponents.headerAfterSearchWait)
        await expect(headerVideos).toHaveText(searchcomponents.secondWordForCheck)

  })


})
