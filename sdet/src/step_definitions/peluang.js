const { Then } = require('cucumber');
const konten = require('../page-objects/content');

Then('user click button lihat peluang', async () => {
    await konten.konten.clickPeluang();
});

Then('user can see list position', async () => {
    await testController.expect(konten.getPosisi()).contains('QA Test');
});