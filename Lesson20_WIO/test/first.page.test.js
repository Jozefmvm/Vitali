const { MainPage } = require('../pageobjects/MainPage');
const { FirstPage } = require('../pageobjects/first.page')


const mainPage = new MainPage();
const firstpage = new FirstPage();


describe('Check first page by img of robot', function() {

    before('maximizeWindow and timeout', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await browser.maximizeWindow();
    })


    it('Check IMG on the first page', async() => {
        const a = await firstpage.isEnabledImg()
        expect(a).toEqual(true)
    })

})