const { Then } = require('cucumber');
const konten = require('../page-objects/content');

Then('user click arrow next', async () => {
    await konten.konten.clickArrowNext();
});

Then('user click arrow prev', async () => {
    await konten.konten.clickArrowPrev();
});