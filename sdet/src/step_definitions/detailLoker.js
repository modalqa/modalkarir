const { Then } = require('cucumber');
const konten = require('../page-objects/content');

Then('user click position', async () => {
 await konten.konten.clickPosisi();
});

Then('user can see detail position', async () => {
    await testController.expect(konten.getDetailPosisi()).contains('Lingkup Pekerjaan');
});

Then('user click back', async () => {
    await konten.konten.backto();
});

Then('user directed to career page', async () => {
await konten.navigateToThisPage();
});