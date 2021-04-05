const data = require('../../utils/data');
const millonMore = require('../../pageobjects/millionMore.page');
const { expect } = require('chai');

describe('Verify all videos are playing properly without breaking', () => {
    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millonMore.btnAcceptCookies.click();
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('Verify main video is playing successfully and verify the time of the video play', () => {
        millonMore.btnWatchTheStory.click();
        browser.pause(5000);
        browser.switchToFrame(0);
        browser.pause(5000);
        millonMore.btnVideoPause.click();
        const endTime = millonMore.txtCurrentVideoTime.getText().replace(':', '.');
        browser.pause(2000);
        expect(0).to.be.below(parseFloat(endTime));
    });

    it('Verify proper youtube url is loading', () => {
        millonMore.btnWatchTheStory.click();
        browser.pause(3000);
        browser.switchToFrame(0);
        millonMore.btnVideoPause.click();
        browser.switchToParentFrame();
        const videoLink = millonMore.vdoLink.getAttribute('src');
        expect(videoLink).to.be.string(data.video.mainYoutube);
    });

    it('Verify A Million More logo is displaying ', () => {
        millonMore.btnWatchTheStory.click();
        browser.pause(3000);
        browser.switchToFrame(0);
        millonMore.btnVideoPause.click();
        wdioExpect(millonMore.logoAMillionMore).toBeVisible();
    });

});