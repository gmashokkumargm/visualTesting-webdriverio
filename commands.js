const { expect } = require("chai")

module.exports = {

    verifyVisibleAndClickable: (locators) => {
        locators.forEach(ele => {
            wdioExpect(ele).toBeVisible();
            wdioExpect(ele).toBeClickable();
        })
    },

    verifyContent: (locator, expectedText) => {
        expect(locator.getText()).to.have.string(expectedText);
    },

    waitAndClick: (locator) => {
        locator.waitForClickable();
        locator.click();
    }

}

