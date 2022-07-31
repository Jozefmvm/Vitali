const { BasePage } = require('../BasePage');
const { BaseElement } = require('../../helpers/BaseElements');
const { default: $ } = require('webdriverio/build/commands/element/$');

const baseElement = new BaseElement();

class Header extends BasePage {
    constructor() {
        super();
        this.headerDocsLink = "//*[@class='navbar__item navbar__link' and @href='/docs/gettingstarted']";
        this.headerApiLink = "//*[@class='navbar__item navbar__link' and @href='/docs/api']";
        this.headerContributeLink = "//*[@class='navbar__item navbar__link' and @href='/docs/contribute']";
        this.headerBlogLink = "//*[@class='navbar__item navbar__link' and @href='/blog']";
        this.headerCommunityLink = "//*[@class='navbar__item navbar__link' and @href='/community/support']";
        this.headerActiveLink = ".navbar__item.navbar__link.navbar__link--active";

    }

    async goToHeaderLinks(selector){
        await baseElement.get(selector);
        await baseElement.click();
    }


    async checkEnabledActivElementAfterClick(selector){
        await baseElement.get(selector);
        await baseElement.click();
        await browser.pause(2000);
        return browser.$(this.headerActiveLink).isEnabled()
    }

// it's really difficult for me...  may be i can solve it
    // async getColorButton(selector, activeselector) {
    //     await browser.pause(3000);
    //     await baseElement.get(selector);
    //     await baseElement.click();
    //     return $(activeselector).getCSSProperty('color')
    // }


}

module.exports = { Header }
