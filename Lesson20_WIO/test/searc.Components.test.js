const { MainPage } = require('../pageobjects/MainPage');
const { SearchComponent } = require('../pageobjects/pagecomponents/searchComponent')

const mainPage = new MainPage();
const searchComponent = new SearchComponent()

describe('Check searhcomponent', function() {

    before('maximizeWindow and timeout', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await browser.maximizeWindow();
    })

    it('Check result of search by title after seaching and swiching by link', async() => {
        await searchComponent.searchSomeWord()
        const titleAfterSearch = await browser.getTitle();
        expect(titleAfterSearch).toEqual('Driver Binaries | WebdriverIO')
    })

})