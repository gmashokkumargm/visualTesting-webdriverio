const { expect } = require("chai");
const millonMore = require('../../pageobjects/millionMore.page');
const data = require('../../utils/data');

describe('Verify all the contents in webpage', () => {

    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millonMore.btnAcceptCookies.click();
    });

    it('verify ModelIntro heading and paragragh content', () => {
        expect(millonMore.txtModelIntroHeading.getText()).to.have.string(data.content.modelIntroHeading);
        expect(millonMore.txtModelIntroParagraph.getText()).to.have.string(data.content.modelIntroParagraph);
    });

    it('verify TestStatement 1 content', () => {
        expect(millonMore.txtTextStatement1.getText()).to.have.string(data.content.textStatementOne);
    })

    it('verify speed cap, Highway pilot, Driving monitoring cameras, Care key contect', () => {
        expect(millonMore.txtSpeedCap.getText()).to.have.string(data.content.speedCap);
        expect(millonMore.txtHighwayPilot.getText()).to.have.string(data.content.highwayPilot);
        expect(millonMore.txtDrivingMonitoringCameras.getText()).to.have.string(data.content.drivingMonitoringCameras);
        expect(millonMore.txtCareKey.getText()).to.have.string(data.content.careKey);
    });

    it('verify one million content and Amy, Summer, Linda & Molly, Alex stories', () => {
        expect(millonMore.txtStoriesHeadingParagraph.getText()).to.have.string(data.content.StoriesHeadingParagraph);
        expect(millonMore.txtAmyStory.getText()).to.have.string(data.content.amyStory);
        expect(millonMore.txtSummerStory.getText()).to.have.string(data.content.summerStory);
        expect(millonMore.txtLindaAndMollyStory.getText()).to.have.string(data.content.lindaMollyStory);
        expect(millonMore.txtAlexStory.getText()).to.have.string(data.content.alexStory);
    });

    it('Verify decades of innovation content', () => {
        expect(millonMore.txtDecadesOfInnovation.getText()).to.have.string(data.content.decadesOfInnovation);
    });

    it('Verify disclaimer content', () => {
        expect(millonMore.txtDisclaimer.getText()).to.have.string(data.content.disclaimer);
    });

    it('Verify copyright content in the footer', () => {
        expect(millonMore.txtCopyright.getText()).to.have.string(data.content.copyright);
    });

});