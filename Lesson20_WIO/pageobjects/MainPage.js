const { BasePage } = require('./BasePage.js');
const { BaseElement } = require('../helpers/BaseElements');
const { default: $ } = require('webdriverio/build/commands/browser/$.js');

const baseElement = new BaseElement();

class MainPage extends BasePage {
    constructor() {
        super();
    }

}

module.exports = { MainPage };
