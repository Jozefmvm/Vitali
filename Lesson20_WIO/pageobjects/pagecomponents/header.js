const { BasePage } = require('../BasePage');
const { BaseElement } = require('../../helpers/BaseElements');

const baseElement = new BaseElement();

class Header extends BasePage {
    constructor() {
        super();
        this.headerDocsLink = "//*[@class='navbar__item navbar__link' and @href='/docs/gettingstarted']";
        this.headerApiLink = "//*[@class='navbar__item navbar__link' and @href='/docs/api']";
        this.headerContributeLink = "//*[@class='navbar__item navbar__link' and @href='/docs/contribute']";
        this.headerBlogLink = "//*[@class='navbar__item navbar__link' and @href='/blog']";
        this.headerCommunityLink = "//*[@class='navbar__item navbar__link' and @href='/community/support']";
        this.headerActiveLinkDoc = "//*[@class='navbar__item navbar__link navbar__link--active' and @href='/docs/gettingstarted']";
        this.headerActiveLinkApi = "//*[@class='navbar__item navbar__link navbar__link--active' and @href='/docs/api']";
        this.headerActiveLinkContribute = "//*[@class='navbar__item navbar__link navbar__link--active' and @href='/docs/contribute']"
        this.headerActiveLinkCommunity = "//*[@class='navbar__item navbar__link navbar__link--active' and @href='/community/support']"


    }

    async goToHeaderLinks(selector){
        await baseElement.get(selector);
        await baseElement.click();
        await browser.pause(3000);
    }


    async checkEnabledActivElementAfterClick(selector, activeSelector){
        await browser.pause(3000);
        await baseElement.get(selector);
        await baseElement.click();
        await browser.pause(3000);
        return $(activeSelector).isEnabled();
    }


    async getColorButton(selector, activeSelector) {
        await browser.pause(3000);
        await baseElement.get(selector);
        await baseElement.click();
        await browser.pause(3000);
        return $(activeSelector).getCSSProperty('color');
    }


}

module.exports = { Header }
