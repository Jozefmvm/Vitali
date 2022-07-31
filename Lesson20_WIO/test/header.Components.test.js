
const { MainPage } = require('../pageobjects/MainPage');
const { Header } = require('../pageobjects/pageComponents/header');



const mainPage = new MainPage();
const header = new Header();


describe('Chec header components on page of WebdriverIO (titles)', function() {

    before('maximizeWindow and timeout', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await browser.maximizeWindow();
    })


    it('Check title after swiching to Docs link', async() => {
        await header.goToHeaderLinks(header.headerDocsLink);
        const docsTitle = await browser.getTitle();
        expect (docsTitle).toEqual('Getting Started | WebdriverIO')
    })


    it('Check title after swiching to Api link', async() => {
        await header.goToHeaderLinks(header.headerApiLink);
        const apiTitle = await browser.getTitle();
        expect (apiTitle).toEqual('Introduction | WebdriverIO')
    })


    it('Check title after swiching to Community link', async() => {
        await header.goToHeaderLinks(header.headerCommunityLink);
        const communityTitle = await browser.getTitle();
        expect (communityTitle).toEqual('Need Help? | WebdriverIO')
    })


    it ("Check enabled element after click Docs", async() => {
        const a = await header.checkEnabledActivElementAfterClick(header.headerDocsLink)
        expect(a).toEqual(true)
    })


    it ("Check enabled element after click Api", async() => {
        const a = await header.checkEnabledActivElementAfterClick(header.headerApiLink)
        expect(a).toEqual(true)
    })


    it ("Check enabled element after click Community", async() => {
        const a = await header.checkEnabledActivElementAfterClick(header.headerCommunityLink)
        expect(a).toEqual(true)
    })

    //trouble from header .js
    // it('CSSS', async() => {
    //     await browser.pause(2000)
    //     const a = await header.getColorButton(header.headerDocsLink, header.headerActiveLink)
    //     expect(a).toEqual("")
    // })



})