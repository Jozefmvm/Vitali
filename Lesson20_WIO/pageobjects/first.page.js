const { BasePage } = require('../pageobjects/BasePage');



class FirstPage extends BasePage{
    constructor(){
        super();
        this.heroRobotImg = ".hero__title"
    }

    async isEnabledImg(){
        await browser.pause(2000);
        return browser.$(this.heroRobotImg).isEnabled()
    }


}

module.exports = { FirstPage };