const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/careers`;

exports.navigateToThisPage = async function () {
    return testController.navigateTo(url);
};

exports.konten = {
    async clickPeluang() {
        await testController
            .click(Selector('.header-link-container'))
            .wait(2000);
    },
    async clickPlayV() {
        await testController
            .click(Selector('.start-img'))
            .wait(2000);
    },
    async clickCloseV() {
        await testController
            .click(Selector('.close'))
            .wait(2000);
    },
    async clickArrowNext() {
        await testController
            .click(Selector('.slick-arrow.slick-next'))
            .wait(2000);
    },
    async clickArrowPrev() {
        await testController.click(Selector('.slick-arrow.slick-prev'));
    },
    async clickPosisi() {
        await testController
            .click(Selector('a').withText('Lihat Detil'))
            .wait(2000);
    },
    async backto() {
        await testController.click(Selector('a').withText('Karir'));
    }


}

exports.getPosisi = function () {
    return Selector('.mb-0.text-capitalize').with({ boundTestRun: testController }).textContent;
};

exports.getDetailPosisi = function () {
    return Selector('.content.job-detail-title').with({ boundTestRun: testController }).textContent;
};