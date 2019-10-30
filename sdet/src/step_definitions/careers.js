const { Given, When, Then } = require('cucumber');
const isi = require('../page-objects/career');

Given('user can open main web modalrakyat', async () => {
    await isi.navigateToThisPage();
});
When('user directed to mainweb user can see title', async () => {
    await testController.expect(isi.getPage()).contains('Raih Keuntungan Pendanaan Hingga 25% Per Tahun!');
});
When('user click menu karir', async () => {
    await isi.navigasi.clickCareer();
});
Then('user can see title karir page', async () => {
    await testController.expect(isi.getPageKarir()).contains('Dapatkan Pengalaman Karir Terbaik Bersama Modal Rakyat');
});
