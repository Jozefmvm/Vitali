const { test, expect } = require('@playwright/test');
const { HeaderPlaywright } = require('../pageobject/pagecomponent/headerComponents');

const header = new HeaderPlaywright();


test.describe('Check header of site of Playwright', () => {

    test.beforeEach(async ({ page }) => {

      await page.goto('https://playwright.dev/');
    });


    test ('Check text of link (playwright) on the header ', async({ page }) => {
        const headerPlaywright =  page.locator(header.headerPlaywrightLink);
        await expect(headerPlaywright).toHaveText('Playwright');
    })


    test ('Check Docs link color before click and after click', async({ page }) => {
        const DocsLink = page.locator(header.headerDocsLink);
        await expect(DocsLink).toHaveCSS('color', 'rgb(28, 30, 33)');
        await DocsLink.click();
        const DocsLinkActive = page.locator(header.headerDocsLinkActive);
        await expect(DocsLinkActive).toHaveCSS('color', 'rgb(26, 126, 31)');
    })


    test ('Check Api link color before click and after click', async({ page }) => {
        const DocsLink = page.locator(header.headerApiLink);
        await expect(DocsLink).toHaveCSS('color', 'rgb(28, 30, 33)');
        await DocsLink.click();
        const DocsLinkActive = page.locator(header.headerApiLinkActive);
        await expect(DocsLinkActive).toHaveCSS('color', 'rgb(26, 126, 31)');
    })

    test ('Check Community link color before click and  after click', async({ page }) => {
        const DocsLink = page.locator(header.headerCommunityLink);
        await expect(DocsLink).toHaveCSS('color', 'rgb(28, 30, 33)');
        await DocsLink.click();
        const DocsLinkActive = page.locator(header.headerCommunityLinkActive);
        await expect(DocsLinkActive).toHaveCSS('color', 'rgb(26, 126, 31)');
    })


    test ('Check page after click on Community link ', async({ page }) => {
        await page.locator(header.headerCommunityLink).click();
        const MajorText = page.locator(header.majorPageText);
        await expect(MajorText).toContainText(header.subtitlesCommunityPage);
    })



})
