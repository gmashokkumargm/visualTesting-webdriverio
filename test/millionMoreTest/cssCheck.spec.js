const data = require('../../utils/data');
const millonMore = require('../../pageobjects/millionMore.page');
const commonPage = require('../../pageobjects/commonPage');
const { expect } = require('chai');


describe('Verify all the css including width and height of the elements', () => {
    before(() => {
        browser.url(data.url);
        browser.maximizeWindow();
        millonMore.btnAcceptCookies.click();
    });

    it('Verify volvo logo is matching with expected width and height', () => {
        const volvoLogo = commonPage.logoVolvo.getSize();
        expect(volvoLogo.width).to.be.eq(data.CSS.volvoLogo.width);
        expect(volvoLogo.height).to.be.eq(data.CSS.volvoLogo.height);
    });

    it('Verify cars css is matching with expected width and height', () => {
        const carsSection = commonPage.scnCarsCss.getSize();
        expect(Math.round(carsSection.width)).to.be.eq(data.CSS.carSection.width);
        expect(Math.round(carsSection.height)).to.be.eq(data.CSS.carSection.height);
    });

    it('Verify Main video css is matching with expected width and height', () => {
        const mainVideo = millonMore.vdoMainVideoCSS.getSize();
        expect(mainVideo.width).to.be.eq(data.CSS.mainVideo.width);
        expect(mainVideo.height).to.be.eq(data.CSS.mainVideo.height);
    });

    it('Verify all call outs icon css is matching with expected width and height', () => {
        millonMore.icnCalloutsCSS.forEach(ele => {
            ele.waitForDisplayed();
            const callout = ele.getSize();
            expect(callout.height).to.be.eq(data.CSS.callouts.height);
            expect(callout.width).to.be.eq(data.CSS.callouts.width);
        })
    });

    it('Verify all testimonials video image size matching with expected width and height', () => {
        millonMore.vdoTestimonials.forEach(ele => {
            ele.waitForClickable();
            const testimonial = ele.getSize();
            expect(testimonial.height).to.be.eq(data.CSS.testmonials.height);
            expect(testimonial.width).to.be.eq(data.CSS.testmonials.width);

        })
    });

    it('Verify play button size in testimonial video', () => {
        millonMore.btnStoryVideoPlay.forEach(ele => {
            ele.scrollIntoView();
            ele.waitForDisplayed();
            const playButtonTestimonial = ele.getSize();
            expect(playButtonTestimonial.height).to.be.eq(data.CSS.playButtonTestimonial.height);
            expect(playButtonTestimonial.width).to.be.eq(data.CSS.playButtonTestimonial.width);
        })
    });

    it('Verify all product image matching with exprected width and heigh', () => {
        millonMore.imgAllCars.forEach(ele => {
            ele.scrollIntoView();
            ele.waitForDisplayed();
            const productImage = ele.getSize();
            expect(Math.round(productImage.height)).to.be.eq(data.CSS.productImage.height);
            expect(Math.round(productImage.width)).to.be.eq(data.CSS.productImage.width);

        })
    });

});