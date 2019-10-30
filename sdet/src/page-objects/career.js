const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}`;

exports.navigateToThisPage = async function () {
    return testController.navigateTo(url);
};


exports.getPage = function () {
    return Selector('.title-name').with({ boundTestRun: testController }).textContent;
};
exports.getPageKarir = function () {
    return Selector('.title').with({ boundTestRun: testController }).textContent;
};

exports.navigasi = {
    async clickCareer() {
        await testController.click(Selector('a').withText('Karir'));
    },
    async clickPendana() {
        await testController.click(Selector('a').withText('Pendana'));
    },
    async clickPeminjam() {
        await testController.click(Selector('a').withText('Peminjam'));
    },
    async clickTentang() {
        await testController.click(Selector('a').withText('Tentang Kami'));
    },
    async clickFaq() {
        await testController.click(Selector('a').withText('FAQ'));
    },
    async clickBlog() {
        await testController.click(Selector('a').withText('Blog'));
    },

}