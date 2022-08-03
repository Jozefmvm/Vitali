class BaseElement {
    async wrapper(element) {
        this.webElement = element;
        return this.webElement;
    }

    async get(selector) {
        if (!(selector instanceof BaseElement)) {
            this.wrapper(await $(selector));
            this.selector = selector;
            return this.webElement;
          }
          return selector;
    }

    async getArray(selector) {
        const elements = await $$(selector);
        const baseElements = [];
        elements.forEach((element) => {
          const baseElement = new BaseElement();
          baseElement.wrapper(element);
          baseElement.selector = selector;
          baseElements.push(baseElement);
        });
        this.webElement = baseElements;
        return baseElements;
    }

    async getElement() {
        return this.webElement;
    }

    async click(index) {
        const element = await this.getElement();
        console.log('BaseElements - ', BaseElement);
        console.log('element ---- ', element);
        if (element.length) {
            return element[index].click();
        }
        await element.waitForClickable();
        return element.click();
    }
    
    async getText(selector) {
        await this.get(selector);
        const element = await this.getElement();
        return element.getText();
      }
}

module.exports = { BaseElement };
