const { Then } = require('cucumber');
const konten = require('../page-objects/content');

Then('user click play video', async () => {
    await konten.konten.clickPlayV();
});

Then('user click close video', async () => {
    await konten.konten.clickCloseV();
});