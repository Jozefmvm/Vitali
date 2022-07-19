// 1) зайти на сайт https://chromedriver.chromium.org/home
// 2) проверить текст основного тайтла "ChromeDriver"
// 3) кликнуть в хедере на пункт "Chrome Extencions"
// 4) сделать хайлайт для нового основного тайтла
// 5) проверить что новый тайтл стал "Chrome Extencions"
// 6. Перейти на страницу поиска
// 7. Ввести driver в поиск
// 8. Проверить что первая ссылка содержит слово driver

const {Builder, By, Key} = require('selenium-webdriver');

const { expect } = require ('chai')

const driver = new Builder().forBrowser('chrome').build();


before (async() => {
    driver.manage().window().maximize();
});

after (async() =>{
    driver.close();
})



// Title одинаковый на всех страница и я решил, что речь и главной надписи т.к. она меняется при переключениях по сайту.

describe('Test site of chromdriver', function(){

    it('Go to the site and check major text of page', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(2000);
        const titlePageText = await driver.findElement(By.xpath('//span[@class =" Rn3Z1b"]')).getText();
        expect(titlePageText).to.equal('ChromeDriver');
        
        
    })

    it ('Transition to the page of "Chrome Extentions", change bacground and check  major text of page', async() => {
        const buttonChromeExtentions = await driver.findElement(By.xpath('//a[@class="aJHbb dk90Ob jgXgSe HlqNPb" and @data-url="/extensions"]'))
        await driver.actions().click(buttonChromeExtentions).perform();
        const titlePageText = await driver.findElement(By.xpath('//span[@class =" Rn3Z1b"]')).getText();
        const titlePage = await driver.findElement(By.xpath('//span[@class =" Rn3Z1b"]'));
        await driver.executeScript("arguments[0].style.backgroundColor='" + "red" + "'", titlePage);
        expect(titlePageText).to.equal('Chrome Extensions');
    })

    it ('Transition to the page of searching and check result of request', async() => {
        const buttonForSerching = await driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
        await driver.actions().click(buttonForSerching).perform();
        await driver.sleep(2000);
        const spaceOfSearching = await driver.findElement(By.xpath('//input[@type="search"]'));
        await driver.actions(spaceOfSearching).sendKeys('driver').sendKeys(Key.ENTER).perform();
        await driver.sleep(2000);
        const firsstLink = await driver.findElement(By.xpath('//a[@data-position = "1"]/../div[@class="yDWqEe"]//b')).getText();
        expect(firsstLink).contains('driver');
    })
})
