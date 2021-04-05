const { expect } = require("chai")

class millionMore {

    //MillionMore page Locators
    get btnAcceptCookies() { return $('//button[@title="Accept"]') }
    get homepageURL() { return $$('a') }

    get txtModelIntroHeading() { return $('[data-autoid="ModelIntro"] h2') }
    get txtModelIntroParagraph() { return $('[data-autoid="ModelIntro"] p') }
    get txtTextStatement1() { return $('[data-autoid="TextStatement-1"]') }
    get txtSpeedCap() { return $('//em[text()="Speed cap"]/../p') }
    get txtHighwayPilot() { return $('//em[text()="Highway pilot"]/../p') }
    get txtDrivingMonitoringCameras() { return $('//em[text()="Driver monitoring cameras"]/../p') }
    get txtCareKey() { return $('//em[text()="Care Key"]/../p') }
    get txtStoriesHeadingParagraph() { return $('[data-component="VideoTestimonials"] h2').nextElement() }
    get txtAmyStory() { return $('//em[text()="Amy"]').nextElement() }
    get txtSummerStory() { return $('//em[text()="Summer"]').nextElement() }
    get txtLindaAndMollyStory() { return $('//em[text()="Linda & Molly"]').nextElement() }
    get txtAlexStory() { return $('//em[text()="Alex"]').nextElement() }
    get txtDecadesOfInnovation() { return $('#ImageWithText-1 p') }
    get txtDisclaimer() { return $('#Disclaimer-1') }
    get txtCopyright() { return $('[data-autoid="footer:copyright"]') }

    get vdoMainVideo() { return $('#Video-1') }
    get lnkLearnMoreCarSafety() { return $('#IconCallouts-1 a') }

    get vdoStory() { return $$('[data-autoid="videoTestimonials:container"] video') }
    get btnStoryVideoPlay() { return $$('[data-autoid="videoTestimonials:container"] button') }

    get imgSeatBelt() { return $('#ImageWithText-1 img') }
    get btnLearnMore() { return $('[data-autoid="imageWithText:primaryCta"]') }
    get imgAllCars() { return $$('#ProductListCarousel-1 picture') }
    get lnkProductList() { return $$('#ProductListCarousel-1 a') }

    get btnWatchTheStory() { return $('//button[text()="watch the story"]') }
    get btnVideoPause() { return $('[title="Pause (k)"]') }
    get txtCurrentVideoTime() { return $('[class="ytp-time-current"]') }
    get vdoLink() { return $('[allow="autoplay"]') }
    get logoAMillionMore() { return $('[data-sessionlink="feature=player-title"]') }
    get vdoTestimonials() { return $$('[data-autoid="videoTestimonials:container"] video') }

    get vdoMainVideoCSS() { return $('#Video-1 video') }
    get icnCalloutsCSS() { return $$('[data-autoid="IconTextList:icon"]') }
    get icnNextCar() { return $('[data-autoid="springCarouselNextButton"]') }

    get scnIconCallOuts() { return $('#IconCallouts-1') }

    getUrls(locator) {
        return locator.map(link => link.getAttribute('href'))
    }

    verifyAllUrls(allURLS) {
        allURLS.forEach(url => {
            browser.url(url)
            let title = browser.getTitle()
            let currentUrl = browser.getUrl()
            console.log(`${currentUrl} -> ${title}`)
            expect(title).not.have.contains('text', '404')
        })
    }


}
module.exports = new millionMore