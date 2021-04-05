const millionmorePage = require('./millionMore.page');
class common {

    get btnCars() { return $('[id="nav:topNavCarMenu"]') }

    get carUrls() { return $$('[data-autoid="nav:topNavCarMenuContainer"] a') }
    get btnBuy() { return $('//em[text()="Buy"]') }
    get btnOwn() { return $('//em[text()="Own"]') }
    get btnWhyVolvo() { return $('//em[text()="Why Volvo"]') }
    get btnExplore() { return $('//em[text()="Explore"]') }
    get btnMore() { return $('//em[text()="More"]') }
    get btnInternational() { return $('//p[text()="International"]') }
    get btnBack() { return $('[data-autoid="nav:sideNavTitle"]').previousElement() }
    get linkSideNav() { return $$('[data-autoid="nav:sideNavLinksMenuDraw"] a') }
    get btnCommon() { return $$('//div[@data-autoid="nav:sideNavigationDraw"]//button') }

    get logoVolvo() { return $('[alt="Volvo"') }
    get scnCars() { return $('[id="nav:topNavCarMenu"]') }
    get tglSideNav() { return $('[id="nav:topNavCarMenu"]') }
    get lnkFooterLinks() { return $$('[data-autoid="footer:links"]') }
    get scnCarsCss() { return $('//span[text()="Cars"]') }
    get scnElectricCars() { return $('//h2[text()="Electric"]') }
    get scnHybridsCars() { return $('//h2[text()="Hybrids"]') }
    get scnMildHybrids() { return $('//h2[text()="Mild hybrids"]') }


    getUrlFromSideNav() {
        let sideNavUrl = []
        this.btnCommon.forEach((ele) => {
            ele.click()
            sideNavUrl.push(millionmorePage.getUrls(this.linkSideNav))
            this.btnBack.click()
        })
        return sideNavUrl
    }

    clickCarSection() {
        this.scnCars.click()
        this.scnCars.click()
        this.scnCars.click()
    }

}
module.exports = new common