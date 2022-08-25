const { test, expect } = require('@playwright/test');
const { FirstPage } = require('../pageobject/majorPage')

const firstpaje = new FirstPage();



test.describe('Major page', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://playwright.dev/');
  });


  test('Check major title and header', async ({ page }) => {


     await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

     const header = page.locator(firstpaje.header);

     await expect(header).toHaveText('Playwright enables reliable end-to-end testing for modern web apps.');


  });

  test('Check img of browsers on major page', async ({ page }) => {

    const img_of_brausers = page.locator(firstpaje.majorImgBrausers);

    await expect(img_of_brausers).toBeVisible()
  })


  test('Check CSS (color) of link of Bing ', async({ page }) => {

    const linkBing = await page.locator(firstpaje.linkBing);

    await expect (linkBing).toHaveCSS('color', 'rgb(26, 126, 31)');
  })



  test('Make screenshot of element logo list', async({ page }) => {

    await page.locator(firstpaje.logoList).screenshot({ path: './screenshot/screenshot.png'});

  })

})
