const data = require('../../utils/data');
const millionMore = require('../../pageobjects/millionMore.page');
const commonPage = require('../../pageobjects/commonPage');
const { expect } = require('chai');

describe('Check all UI elements are matching with base screens', () => {

    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millionMore.btnAcceptCookies.click();
    });

    beforeEach(() => {
        browser.url(data.url);
    });

    it('Verify tabbable in million more page', () => {
        browser.saveTabbablePage('check-tabbable', {});
        expect(browser.checkTabbablePage('check-tabbable', {})).to.be.below(10);
    });

    it('Verify volvo logo', () => {
        browser.saveElement(commonPage.logoVolvo, 'volvoLogo', {});
        expect(browser.checkElement(commonPage.logoVolvo, 'volvoLogo', {})).equal(0);
    });

    it('Verify topscreen section', () => {
        browser.saveScreen('topSection', {});
        expect(browser.checkScreen('topSection', {})).to.be.below(5);
    });

    it('Verify the Electric cars sections in the header', () => {
        commonPage.clickCarSection();
        commonPage.scnElectricCars.click();
        browser.saveScreen('ElectricCarsSection', {});
        expect(browser.checkScreen('ElectricCarsSection', {})).to.be.below(5);
    });

    it('Verify the Hybrids cars sections in the header', () => {
        commonPage.clickCarSection();
        commonPage.scnHybridsCars.click();
        browser.saveScreen('HybridsCarsSection', {});
        expect(browser.checkScreen('HybridsCarsSection', {})).to.be.below(5);
    });

    it('Verify the Mild hybrids car section in the header', () => {
        commonPage.clickCarSection();
        commonPage.scnMildHybrids.click();
        browser.saveScreen('MildHybridsCarsSection', {});
        expect(browser.checkScreen('MildHybridsCarsSection', {})).to.be.below(5);
    });

    it('Verify icon call outs section', () => {
        browser.saveFullPageScreen('millionMorePage', {});
        expect(browser.checkFullPageScreen('millionMorePage', {})).to.be.below(10);
    });

});