const data = require('../../utils/data');
const millonMore = require('../../pageobjects/millionMore.page');
const commonPage = require('../../pageobjects/commonPage');

describe('Check visibility of all elements in Million more page', () => {

    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millonMore.btnAcceptCookies.click();
    });

    it('Verify volvo logo is visible properly', () => {
        wdioExpect(commonPage.logoVolvo).toBeVisible();
    });

    it('Verify cars section is visible and clickable', () => {
        wdioExpect(commonPage.scnCars).toBeVisible();
        wdioExpect(commonPage.scnCars).toBeClickable();
    });

    it('Verify side nav is visible and clickable', () => {
        wdioExpect(commonPage.tglSideNav).toBeVisible();
        wdioExpect(commonPage.tglSideNav).toBeClickable();
    });

    it('Verify homepage video is visible and clickable', () => {
        wdioExpect(millonMore.vdoMainVideo).toBeVisible();
        wdioExpect(millonMore.vdoMainVideo).toBeClickable();
    });

    it('Verify Learn more about car safety link is visible and clickable', () => {
        wdioExpect(millonMore.lnkLearnMoreCarSafety).toBeVisible();
        wdioExpect(millonMore.lnkLearnMoreCarSafety).toBeClickable();
    });

    it('Verify all story video and play button is visible and clickable', () => {
        browser.verifyVisibleAndClickable(millonMore.vdoStory);
        browser.verifyVisibleAndClickable(millonMore.btnStoryVideoPlay);
    });

    it('Verify learn more button and seat belt image is visible', () => {
        wdioExpect(millonMore.btnLearnMore).toBeVisible();
        wdioExpect(millonMore.btnLearnMore).toBeClickable();
        wdioExpect(millonMore.imgSeatBelt).toBeVisible();
    });

    it('Verify 8cars picture is visible and clickable', () => {
        browser.verifyVisibleAndClickable(millonMore.imgAllCars);
        browser.verifyVisibleAndClickable(millonMore.lnkProductList);
    });

    it('Verify all footer links is visible and clickable', () => {
        browser.verifyVisibleAndClickable(commonPage.lnkFooterLinks);
    });

});