const { BasePage } = require('../BasePage');
const { BaseElement } = require('../../helpers/BaseElements');
const { default: $ } = require('webdriverio/build/commands/element/$');

const baseElement = new BaseElement();

class SearchComponent extends BasePage {
    constructor() {
        super();
        this.searchFieldforStart = '.searchBox_qEbK';
        this.searchFildForInput = '.DocSearch-Input';
        this.resultSearchingDriver = '.DocSearch-Hit-content-wrapper .DocSearch-Hit-title'
    }

    async searchSomeWord(){
        await baseElement.get(this.searchFieldforStart);
        await baseElement.click();
        await baseElement.get(this.searchFildForInput);
        await baseElement.click();
        await browser.pause(2000)
        await browser.$(this.searchFildForInput).addValue('Driver');
        await browser.pause(2000)
        await baseElement.get(this.resultSearchingDriver);
        await baseElement.click();
    }
}

module.exports = { SearchComponent };
